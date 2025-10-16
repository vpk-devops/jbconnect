import { lazy } from "react";
export const pageRoutes = [
  // Private Routes
  {
    key: "home",
    exact: true,
    path: "/",
    component: lazy(() => import("../pages/More/AddMember/AddMember")),
    private: false,
  },
  {
    key: "more",
    exact: true,
    path: "/more",
    component: lazy(() => import("../pages/More/More")),
    private: false,
  },
  {
    key: "add-member",
    exact: true,
    path: "/add-member",
    component: lazy(() => import("../pages/More/AddMember/AddMember")),
    private: true,
  },
  {
    key: "my-profile",
    exact: true,
    path: "/my-profile",
    component: lazy(() => import("../pages/More/Profile/MyProfile")),
    private: true,
  },
  {
    key: "edit-profile",
    exact: true,
    path: "/edit-profile",
    component: lazy(() => import("../pages/More/Profile/EditProfile")),
    private: true,
  },
  {
    key: "terms",
    exact: true,
    path: "/terms",
    component: lazy(
      () => import("../pages/More/TermsConditions/TermsConditions")
    ),
    private: true,
  },
  {
    key: "privacy",
    exact: true,
    path: "/privacy",
    component: lazy(() => import("../pages/More/PrivacyPolicy/PrivacyPolicy")),
    private: true,
  },
  {
    key: "cancellation",
    exact: true,
    path: "/cancellation",
    component: lazy(
      () => import("../pages/More/CancellationPolicy/CancellationPolicy")
    ),
    private: true,
  },
  {
    key: "refer",
    exact: true,
    path: "/refer",
    component: lazy(() => import("../pages/More/ReferEarn/ReferEarn")),
    private: true,
  },
  {
    key: "faqs",
    exact: true,
    path: "/faqs",
    component: lazy(() => import("../pages/More/Faq/Faq")),
    private: true,
  },
  {
    key: "delete-account",
    exact: true,
    path: "/delete-account",
    component: lazy(() => import("../pages/More/DeleteAccount/DeleteAccount")),
    private: true,
  },
  {
    key: "logout",
    exact: true,
    path: "/logout",
    component: lazy(() => import("../pages/More/Logout/Logout")),
    private: true,
  },
  {
    key: "notifications",
    exact: true,
    path: "/notifications",
    component: lazy(() => import("../pages/Notification/Notification")),
    private: true,
  },
  {
    key: "search",
    exact: true,
    path: "/search",
    component: lazy(() => import("../pages/SearchPage/SearchPage")),
    private: true,
  },
  // --- More JB One ---
  {
    key: "learn-help-center",
    exact: true,
    path: "/learnhelpcenter",
    component: lazy(
      () => import("../pages/More/More JB ONE/LeranHelpCenter/LearnHelpCenter")
    ),
    private: true,
  },
  {
    key: "blogs",
    exact: true,
    path: "/blogs",
    component: lazy(() => import("../pages/More/More JB ONE/Blogs/BlogsPage")),
    private: true,
  },
  {
    key: "blogs-optimization",
    exact: true,
    path: "/blogs/:id",
    component: lazy(
      () => import("../pages/More/More JB ONE/Blogs/Blogoptimizing")
    ),
    private: true,
  },
  {
    key: "phone-call",
    exact: true,
    path: "/phonecall",
    component: lazy(
      () => import("../pages/More/More JB ONE/LeranHelpCenter/phonecall")
    ),
    private: true,
  },
  {
    key: "email-support",
    exact: true,
    path: "/emailsupport",
    component: lazy(
      () => import("../pages/More/More JB ONE/LeranHelpCenter/sendemail")
    ),
    private: true,
  },
  {
    key: "live-chat",
    exact: true,
    path: "/livechat",
    component: lazy(
      () => import("../pages/More/More JB ONE/LeranHelpCenter/startchat")
    ),
    private: true,
  },
  {
    key: "design-view",
    exact: true,
    path: "/designview",
    component: lazy(
      () => import("../pages/More/More JB ONE/Design/DesignPage")
    ),
    private: true,
  },
  {
    key: "specifications",
    exact: true,
    path: "/specifications",
    component: lazy(
      () => import("../pages/More/More JB ONE/Design/Specifications")
    ),
    private: true,
  },
  {
    key: "3D-design",
    exact: true,
    path: "/3DDesign",
    component: lazy(
      () => import("../pages/More/More JB ONE/Design/ThreeDDesign")
    ),
    private: true,
  },
  {
    key: "2D-design",
    exact: true,
    path: "/2DDesign",
    component: lazy(
      () => import("../pages/More/More JB ONE/Design/TwoDDesign")
    ),
    private: true,
  },

  //Public Routes
  {
    key: "sign-in",
    exact: true,
    path: "/sign-in",
    component: lazy(() => import("../pages/Auth/SignIn")),
    private: false,
  },
  {
    key: "sign-up",
    exact: true,
    path: "/sign-up",
    component: lazy(() => import("../pages/Auth/SignUp")),
    private: false,
  },
  {
    key: "email-otp",
    exact: true,
    path: "/email-otp",
    component: lazy(() => import("../pages/Auth/EmailOtp")),
    private: false,
  },
  {
    key: "phone-otp",
    exact: true,
    path: "/phone-otp",
    component: lazy(() => import("../pages/Auth/PhoneOtp")),
    private: false,
  },
  {
    key: "role-login",
    exact: true,
    path: "/role-login",
    component: lazy(() => import("../pages/Auth/RoleLogin")),
    private: false,
  },
  {
    key: "forgot-password",
    exact: true,
    path: "/forgot-password",
    component: lazy(() => import("../pages/Auth/ForgotPassword")),
    private: false,
  },
  {
    key: "new-password",
    exact: true,
    path: "/new-password",
    component: lazy(() => import("../pages/Auth/NewPassword")),
    private: false,
  },
  // {
  //   key: "splashscreen",
  //   exact: true,
  //   path: "/splashscreen",
  //   component: lazy(() => import("../pages/IntroApp/Splashscreen")),
  //   private: false,
  // },
  {
    key: "app-intro",
    exact: true,
    path: "/app-intro",
    component: lazy(() => import("../pages/IntroApp/AppIntro")),
    private: false,
  },

// Post Requirements  routes
  {
    key: "Post Requirements",
    exact: true,
    path: "/post-requirements",
    component: lazy(() => import("../pages/PostRequirements/PostRequirementHomePage")),
    private: false,
  },
  {
    key: "Post Requirment Catgory",
    exact: true,
  path: "/post-requirements/:service",
    component: lazy(() => import("../pages/PostRequirements/PostRequirmentServicePage")),
    private: false,
  },
  {
    key: "Post Requirment Jbconex1",
    exact: true,
  path: "/post-requirements/jbconx-directly",
    component: lazy(() => import("../pages/PostRequirements/jbconex1")),
    private: false,
  },
  {
    key: "Post Requirment Jbconex2",
    exact: true,
  path: "/post-requirements/requirments-welcome",
    component: lazy(() => import("../pages/PostRequirements/jbconex2")),
    private: false,
  },
   {
    key: "Post Requirment Jbconex3",
    exact: true,
  path: "/post-requirements/requirements-services",
    component: lazy(() => import("../pages/PostRequirements/jbconex3")),
    private: false,
  },
   {
    key: "Post Requirment Jbconex4",
    exact: true,
  path: "/post-requirements/jbconx-budget",
    component: lazy(() => import("../pages/PostRequirements/jbconex4")),
    private: false,
  },
  {
    key: "Post Requirment Jbconex5",
    exact: true,
  path: "/post-requirements/requirements-location",
    component: lazy(() => import("../pages/PostRequirements/jbconex5")),
    private: false,
  },

  {
    key: "Post Requirment Jbconex1",
    exact: true,
  path: "/post-requirements/requirements-connect",
    component: lazy(() => import("../pages/PostRequirements/jbconex6")),
    private: false,
  },


// Flips routes
  {
    key: "Photo selection",
    exact: true,
  path: "/select-photos",
    component: lazy(() => import("../pages/Flips/PhotoSelctionPage")),
    private: false,
  },
    {
    key: "Vedio editing",
    exact: true,
  path: "/video-editor",
    component: lazy(() => import("../pages/Flips/VedioEditorPage")),
    private: false,
  },
  {
    key: "Vedio post",
    exact: true,
  path: "/vedio-post",
    component: lazy(() => import("../pages/Flips/VedioPostPage")),
    private: false,
  },



  {
    key: "combo offer",
    exact: true,
    path: "/home-services/combo-offer/:id",
    component: lazy(() => import("../pages/HomeServices/HomeServie/ComboDetailPage")),
    private: false,
  },
  // All service route
  {
    key: "All Services",
    exact: true,
    path: "/home-services/:category/:subCategorySlug/:subCategoryId",
    component: lazy(() => import("../pages/HomeServices/ServicePageWrapper/AllServicesWrapper")),
    private: false,
  },
  // Service detail page 
  {
    key: "Service Detail Page",
    exact: true,
    path: "/home-services/:category/:subCategorySlug/:slug/detailpage",
    component: lazy(() => import("../pages/HomeServices/DetailPages/ServiceDetailRouter")),
    private: false,
  },


  //  booking
  {
    key: "Booking Contact",
    exact: true,
    path: "/home-services/bookings/contact",
    component: lazy(() => import("../pages/HomeServices/Bookings/Booking details/BookingContactPage")),
    private: false,
  },
  {
    key: "Booking Cancel",
    exact: true,
    path: "/home-services/bookings/cancel",
    component: lazy(() => import("../pages/HomeServices/Bookings/Booking details/BookingCancel")),
    private: false,
  },
  {
    key: "Booking Reschedule",
    exact: true,
    path: "/home-services/bookings/reschedule",
    component: lazy(() => import("../pages/HomeServices/Bookings/Booking details/ReschedulePage")),
    private: false,
  },

  {
    key: "Book again",
    exact: true,
    path: "/home-services/bookings/book-agian",
    component: lazy(() => import("../pages/HomeServices/Bookings/Booking details/BookAgainPage")),
    private: false,
  },
  {
    key: "Booking continue",
    exact: true,
    path: "/home-services/bookings/booking-continue",
    component: lazy(() => import("../pages/HomeServices/Bookings/Booking details/BookingDetailContinuePage")),
    private: false,
  },

  {
    key: "Booking status",
    exact: true,
    path: "/home-services/bookings/booking-status",
    component: lazy(() => import("../pages/HomeServices/Bookings/BookingStatus")),
    private: false,
  },
  {
    key: "Booking Contact",
    exact: true,
  path:"/home-services/bookings/write-review",
    component: lazy(() => import("../pages/HomeServices/Bookings/Booking details/BookingHomeserviceReviewPage")),
    private: false,
  },

  // Cart
  {
    key: " Cart",
    exact: true,
    path: "/home-services/cart",
    component: lazy(() => import("../pages/HomeServices/Cart/CartPage")),
    private: false,
  },
  {
    key: " Order Review",
    exact: true,
    path: "/home-services/orderreview",
    component: lazy(() => import("../pages/HomeServices/Cart/OrderReviewPage")),
    private: false,
  },
  {
    key: " Addres Selection",
    exact: true,
    path: "/home-services/select-address",
    component: lazy(() => import("../pages/HomeServices/Cart/AddressSelectPage")),
    private: false,
  },
  {
    key: " DateTime",
    exact: true,
    path: "/home-services/select-datetime",
    component: lazy(() => import("../pages/HomeServices/Cart/DateTimePage")),
    private: false,
  },
  {
    key: " Order Review",
    exact: true,
    path: "/home-services/order-review",
    component: lazy(() => import("../pages/HomeServices/Cart/OrderReviewPage")),
    private: false,
  },

  {
    key: "Payment status",
    exact: true,
    path: "/home-services/payment-status",
    component: lazy(() => import("../pages/HomeServices/Cart/PaymentSucess")),
    private: false,
  },

  //  locate professinals
  {
    key: " Professinols Agent",
    exact: true,
    path: "/home-services/professionals/:agentId",
    component: lazy(() => import("../pages/HomeServices/LoacteProfressionals/AgentDetailsPage")),
    private: false,
  },
  {
    key: "ServiceDetails",
    exact: true,
    path: "/home-services/service-details/:id",
    component: lazy(() => import("../pages/HomeServices/HomeServie/ServiceDetails")),
    private: false,
  },

// Construction related routes
 {
    key: "Construction OnboardScreen",
    exact: true,
    path: "/construction/onBoardscreen",
    component: lazy(() => import("../pages/Construction/EndToEnd/EndToEndOnBoradingPage")),
    private: false,
  },
 {
    key: "ProcessPage",
    exact: true,
    path: "/construction/processpage",
    component: lazy(() => import("../pages/Construction/EndToEnd/ProcessPage")),
    private: false,
  },
 {
    key: "Enquiry steps",
    exact: true,
    path: "/construction/enquiry",
    component: lazy(() => import("../pages/Construction/EndToEnd/EnquiryFormSteps")),
    private: false,
  },
];
