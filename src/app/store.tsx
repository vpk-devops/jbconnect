import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import webStorage from "redux-persist/lib/storage"; // localStorage
import { Capacitor } from "@capacitor/core";
import { CapacitorStorage } from "./capacitorStorage";

// All Reducers
import authReducer from "../features/auth/authSlice";
import categoryReducer from "../features/home-services/category/categorySlice";
import agentReducer from '../features/home-services/ProfessionalAgent/agentSlice';
import serviceReducer from "../features/home-services/services/serviceSlice";
import cartReducer, { addToCart, updateItemQty, removeItem, clearCart } from "../features/home-services/cart/cartSlice";
import orderReducer, { addAddress, setDateTime, setAgent, resetOrder } from "../features/home-services/cart/orderSlice";
import combosReducer from '../features/home-services/combooffers/comboSlice';
import bookingReducer from '../features/home-services/booking/bookingSlice';
import reviewsReducer from '../features/home-services/reviews/reviewSlice'
import blogsReducer from '../features/blogs/blogsSlice';
import requirementsReducer from "../features/post-requirements/postRequirementSlice"
// --- Storage selection (web vs native) ---
const storage = Capacitor.isNativePlatform() ? (CapacitorStorage as any) : webStorage;

// --- Persist configs ---
const cartPersistConfig = { key: "cart", storage, whitelist: ["sections"] };
const orderPersistConfig = { key: "order", storage };

const persistedCart = persistReducer(cartPersistConfig, cartReducer);
const persistedOrder = persistReducer(orderPersistConfig, orderReducer);

// --- Offline sync API (replace with your backend) ---
const API_BASE = "http://localhost:5000/api"; // <-- replace with real API

// async function syncSnapshot(snapshot: any, token?: string) {
//   const res = await fetch(`${API_BASE}/app/sync`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//     },
//     body: JSON.stringify(snapshot),
//   });
//   if (!res.ok) throw new Error("Sync failed");
// }

// --- Offline queue (persist outside Redux to avoid infinite loops) ---
const QUEUE_KEY = "SYNC_SNAPSHOT_QUEUE_V1";
const queueStorage = storage;

async function getQueued(): Promise<any[]> {
  const raw = await queueStorage.getItem(QUEUE_KEY);
  return raw ? JSON.parse(raw) : [];
}
async function setQueued(items: any[]) {
  await queueStorage.setItem(QUEUE_KEY, JSON.stringify(items));
}
async function enqueue(snapshot: any) {
  const items = await getQueued();
  // Keep only the last snapshot (idempotent)
  const next = [snapshot];
  await setQueued(next);
}
async function flushQueue(token?: string) {
  const items = await getQueued();
  if (items.length === 0) return;
  for (const s of items) {
    // await syncSnapshot(s, token);
  }
  await setQueued([]); // clear on success
}

// --- Listener middleware (sync on cart/order changes) ---
const listener = createListenerMiddleware();

listener.startListening({
  matcher: isAnyOf(addToCart, updateItemQty, removeItem, clearCart, addAddress, setDateTime, setAgent, resetOrder),
  effect: async (action, api) => {
    const state = api.getState() as RootState;
    const snapshot = {
      cart: state.cart,
      order: state.order,
      auth: state.auth, // useful for userId/token
      ts: Date.now(),   // timestamp for audit
    };
    try {
      await enqueue(snapshot);
      // await flushQueue(state.auth?.token);
    } catch (e) {
      console.warn("Sync deferred (offline or error)", e);
    }
  },
});

// --- Store ---
export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    services: serviceReducer,
    cart: persistedCart,
    order: persistedOrder,
    agent: agentReducer,
    combos: combosReducer,
    booking: bookingReducer,
    reviews:reviewsReducer,
    blogs:blogsReducer,
    postrequirements:requirementsReducer
  },
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(listener.middleware),
});

// Persistor
export const persistor = persistStore(store);

// Try flush on app start + when back online
flushQueue();
if (typeof window !== "undefined") {
  // window.addEventListener("online", () => flushQueue(store.getState().auth?.token));
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
