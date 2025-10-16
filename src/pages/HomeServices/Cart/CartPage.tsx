import React, { useEffect } from "react";
import { IonIcon, useIonRouter } from "@ionic/react";
import { addOutline, removeOutline, trashOutline } from "ionicons/icons";
import Header from "../../../components/Header/Header";
import PageLayout from "../../../components/Layout/Layout";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { updateItemQty, removeItem, setRequiredCategoryId } from "../../../features/home-services/cart/cartSlice";

// --- QtyControl ---
const QtyControl: React.FC<{
  value: number;
  onInc: () => void;
  onDec: () => void;
}> = ({ value, onInc, onDec }) => (
  <div className="flex items-center gap-2 bg-[#E7EFF7] rounded-full px-3 py-2">
    <button
      onClick={onDec}
      className="grid place-items-center w-6 h-6 rounded-full bg-white"
    >
      <IonIcon icon={removeOutline} className="w-4 h-4 text-[#274C77]" />
    </button>
    <span className="text-[#111827] text-sm font-medium w-4 text-center">
      {value}
    </span>
    <button
      onClick={onInc}
      className="grid place-items-center w-6 h-6 rounded-full bg-[#6096BA]"
    >
      <IonIcon icon={addOutline} className="w-4 h-4 text-white" />
    </button>
  </div>
);

// --- LineItem ---
const LineItem: React.FC<{
  sectionId: string;
  item: { id: string; title: string; image?: string; quantity: number };
  onChange: (q: number) => void;
  onRemove: () => void;
}> = ({ sectionId, item, onChange, onRemove }) => (
  <div className="w-full bg-white rounded-lg border border-[#E5E7EB] [box-shadow:0px_8px_17px_#171a1f26,0px_0px_2px_#171a1f1F]">
    <div className="flex items-center justify-between gap-3 px-3 py-2">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-[52px] h-[40px] rounded overflow-hidden bg-[#F3F4F6]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[12px] font-medium text-[#1F2937] truncate max-w-[160px]">
          {item.title}
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <QtyControl
          value={item.quantity}
          onInc={() => onChange(item.quantity + 1)}
          onDec={() => onChange(Math.max(1, item.quantity - 1))}
        />
        <button
          onClick={onRemove}
          className="grid place-items-center w-8 h-8 rounded-full bg-[#F3F4F6]"
        >
          <IonIcon icon={trashOutline} className="w-4 h-4 text-[#111827]" />
        </button>
      </div>
    </div>
  </div>
);

// --- SectionBlock ---
const SectionBlock: React.FC<{

  section: { id: string; title: string; items: any[] };
  onUpdate: (itemId: string, quantity: number) => void;
  onRemove: (itemId: string) => void;
  onContinue: () => void;
  onCustomise: () => void;
}> = ({ section, onUpdate, onRemove, onContinue, onCustomise }) => (
  <div className="px-4">
    <h3 className="text-[#274C77] text-[14px] font-bold mb-2">{section.title}</h3>
    <div className="space-y-3">
      {section.items.map((it) => (
        <LineItem
          key={it.id}
          sectionId={section.id}
          item={it}
          onChange={(q) => onUpdate(it.id, q)}
          onRemove={() => onRemove(it.id)}
        />
      ))}
      <div className="flex items-center justify-end gap-2 mt-2">
        <CustomButton
          text="Customise"
          className="px-2 h-[14px] text-[9px] leading-[14px] font-normal text-[#002C4B] bg-[#E5F4FF] border-0 rounded-[4px]"
          onClick={onCustomise}
        />
        <CustomButton
          text="Continue"
          className="px-2 h-[14px] text-[9px] leading-[14px] font-normal text-[#002C4B] bg-[#E5F4FF] border-0 rounded-[4px]"
          onClick={onContinue}
        />
      </div>
    </div>
  </div>
);

// --- CartPage ---
const CartPage: React.FC = () => {
  const sections = useAppSelector((state) => state.cart.sections);
  console.log("sections", sections)
  const dispatch = useAppDispatch();
  const ionRouter = useIonRouter();


  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (sections.length > 0) {
      localStorage.setItem("cart", JSON.stringify(sections));
    } else {
      localStorage.removeItem("cart");
    }
  }, [sections]);

  // Example: compute total price
  const totalPrice = sections.reduce(
    (sum, sec) =>
      sum +
      sec.items.reduce(
        (s, it) => s + (typeof it.price === "string" ? parseFloat(it.price) : it.price ?? 0) * it.quantity,
        0
      ),
    0
  );
  const goToAgentSelection = () =>
    ionRouter.push("/home-services/professionals", "forward", "push");
  const isCartEmpty =
    !sections || sections.length === 0 || sections.every((s) => s.items.length === 0);

  return (
    <PageLayout header={<Header title="Cart" type="page" showRightIcon={false} />}>
      {isCartEmpty ? (
        // --- Empty Cart UI ---
        <div className="pb-6">
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8 bg-white">
            {/* Cart Image */}
            <div className="relative mb-4 flex items-center justify-center overflow-visible h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[420px] xl:w-[420px] 2xl:h-[460px] 2xl:w-[460px]">
              <img
                src="/assets/images/cart.png"
                alt="Shopping Cart"
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out scale-[1.2] sm:scale-[1.3] md:scale-[1.4] lg:scale-[1.5] xl:scale-[1.6] group-hover:scale-[1.65] active:scale-95"
              />
            </div>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6096BA] text-center mb-2 px-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              Oops! Your cart is currently empty.
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6B7280] text-center mb-6 px-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              Let's get started by adding a service!
            </p>


            <div className="px-4 w-full flex justify-center">
              <CustomButton
                text="Browse Services"
                className="w-full max-w-[280px] h-[44px] px-6 flex items-center justify-center font-inter text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium text-[#6096BA] bg-transparent border-2 border-[#6096BA] rounded-lg hover:bg-[#6096BA] hover:text-white transition-all duration-300"
                onClick={() => ionRouter.push("/home-services/home", "forward", "push")}
              />
            </div>
          </div>
        </div>
      ) : (
        // --- Cart Items UI ---
        <div className="pb-6 space-y-6">
          {sections.map((sec) => (
            <SectionBlock
              key={sec.id}
              section={sec}
              onUpdate={(itemId, q) =>
                dispatch(updateItemQty({ sectionId: sec.id, itemId, quantity: q }))
              }
              onRemove={(itemId) =>
                dispatch(removeItem({ sectionId: sec.id, itemId }))
              }
              onContinue={() => {
                dispatch(setRequiredCategoryId(sec.id));
                goToAgentSelection();
              }}
              onCustomise={() => {
                ionRouter.push("/home-services/home", "forward", "push")
              }}

            />
          ))}
        </div>
      )}
    </PageLayout>
  );
};

export default CartPage;
