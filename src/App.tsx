import { Redirect, Route, useLocation } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonSplitPane,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  gridOutline,
  buildOutline,
  constructOutline,
  playOutline,
  sparklesOutline,
  documentTextOutline,
} from "ionicons/icons";

import Home from "./pages/Home/Home";
import Construction from "./pages/Construction/ConstructionPage";
import Flips from "./pages/Flips/PhotoSelctionPage";
import Ai from "./pages/Ai/Ai";
import Managment from "./pages/Managment/Managment";
import Sidebar from "./components/Sidebar/Siderbar";
import AppRoutes from "./routes/AppRoutes";
import { PersistGate } from "redux-persist/integration/react";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";
import "./theme/variables.css";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import HomeServicesTabs from "./pages/HomeServices/HomeServicesTabs";
import LocateProfessionals from "./pages/HomeServices/LoacteProfressionals/LocateProfessionals";
import Bookings from "./pages/HomeServices/Bookings/BookingPage";
import HomeServicePage from './pages/HomeServices/HomeServie/HomeServicePage';
import AgentDetailsPage from "./pages/HomeServices/LoacteProfressionals/AgentDetailsPage";
import BookingPage from "./pages/HomeServices/Bookings/BookingPage";
import FlipsHomePage from "./pages/Flips/FlipsHomePage";
import ConstructionTabs from "./pages/Construction/ConstructionTabs";

setupIonicReact();

const baseTabButton =
  "flex-1 bg-transparent flex flex-col items-center justify-center gap-1 rounded-md transition-colors duration-200";
const baseIconClass = "text-[28px] text-[#DEE1E6]";
const baseLabelClass = "text-xs font-medium text-[#DEE1E6]";

const noTabRoutes = [
  "/sign-in",
  "/sign-up",
  "/email-otp",
  "/message-otp",
  "/forgot-password",
  "/change-password",
  "/role-login",
  "/splashscreen",
  "/app-intro"
];

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IonApp>
          <IonReactRouter>
            <MainApp />
          </IonReactRouter>
        </IonApp>
      </PersistGate>
    </Provider>
  );
};
const MainApp: React.FC = () => {
  const location = useLocation();
  const hideTabs = noTabRoutes.includes(location.pathname);


  const isHomeServices = location.pathname.startsWith("/home-services");
  const isConstruction = location.pathname.startsWith("/construction");
  return (
    <IonSplitPane contentId="main-content" when="(min-width: 768px)">
      {!hideTabs && <Sidebar />}
      <IonTabs >
        <IonRouterOutlet id="main-content">
          {/* Tab Pages */}
          <Route path="/home" component={Home} exact />
          <Route path="/construction" component={Construction} exact />
          <Route path="/flips" component={FlipsHomePage} exact />
          <Route path="/management" component={Managment} exact />
          <Route path="/ai" component={Ai} exact />
          {/* Home Services Routes */}
          <Route path="/home-services/home" component={HomeServicePage} exact />
          <Route path="/home-services/professionals" component={LocateProfessionals} exact />
          <Route path="/home-services/bookings" component={BookingPage} exact />
          {/* Construction routes */}
          <Route path="/construction/home" component={Construction} exact />
          {/* <Route path="/construction/projects" component={ConstructionProjects} exact />
<Route path="/construction/tasks" component={ConstructionTasks} exact />
<Route path="/construction/profile" component={ConstructionProfile} exact /> */}

          {/* Default redirect */}
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <AppRoutes />
        </IonRouterOutlet>

        {!hideTabs && (
          isHomeServices ? (
            <HomeServicesTabs />
          ) : isConstruction ? (
            <ConstructionTabs />
          ) : (
            <IonTabBar
              slot="bottom"
              className="px-3 bg-custom-blue rounded-t-[18px] h-[70px] shadow-[0_-5px_20px_rgba(0,0,0,0.1)]"
            >
              <IonTabButton
                tab="construction"
                href="/construction"
                className={baseTabButton}
              >
                <IonIcon icon={constructOutline} className={baseIconClass} />
                <IonLabel className={baseLabelClass}>Construction</IonLabel>
              </IonTabButton>

              <IonTabButton tab="flips" href="/flips" className={baseTabButton}>
                <IonIcon icon={playOutline} className={baseIconClass} />
                <IonLabel className={baseLabelClass}>Flips</IonLabel>
              </IonTabButton>

              <IonTabButton tab="home" href="/home" className={baseTabButton}>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <IonIcon
                    icon={gridOutline}
                    className="text-[24px] text-custom-blue font-bold"
                  />
                </div>
              </IonTabButton>

              <IonTabButton
                tab="management"
                href="/management"
                className={baseTabButton}
              >
                <IonIcon icon={documentTextOutline} className={baseIconClass} />
                <IonLabel className={baseLabelClass}>Management</IonLabel>
              </IonTabButton>

              <IonTabButton tab="ai" href="/ai" className={baseTabButton}>
                <div className="flex flex-col items-center justify-center relative">
                  <IonLabel className="text-[24px] font-archivo font-bold text-[#DEE1E6]">
                    Ai
                  </IonLabel>
                  <IonIcon
                    icon={sparklesOutline}
                    className="absolute -top-2 -right-3 text-lg text-[#DEE1E6]"
                  />
                </div>
              </IonTabButton>
            </IonTabBar>
          ))
        }
      </IonTabs>
    </IonSplitPane>
  );
};

export default App;
