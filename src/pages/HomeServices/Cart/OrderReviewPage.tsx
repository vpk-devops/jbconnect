import React from "react";
import { IonIcon, useIonRouter } from "@ionic/react";
import {
  locationOutline,
  timeOutline,
  createOutline,
  chevronForwardOutline,
  trashOutline,
} from "ionicons/icons";
import Header from "../../../components/Header/Header";
import PageLayout from "../../../components/Layout/Layout";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import { AllOfferCard, CancellationPolicyModal, TermsConditionsPolicyModal } from "../../../components/Common/CustomCards/CustomCards";
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { formatDisplayDate } from "../../../utils/helpers";
import { CartSection, clearCart, removeSection, setRequiredCategoryId } from "../../../features/home-services/cart/cartSlice";

const OrderReviewPage: React.FC = () => {
  const { addresses, selectedAddressId, dateTime, agent } = useAppSelector(
    (state) => state.order
  );
  const selectedAddress = addresses.find(addr => addr.id === selectedAddressId);
  const { sections, requiredCategoryId } = useAppSelector(
    (state) => state.cart
  );

  console.log('sec', sections)

  const ionRouter = useIonRouter();
  const dispatch = useAppDispatch();
  const [isCancellation, setIsCancellation] = React.useState(false);
  const [isTerms, setIsTerms] = React.useState(false);

  const currentSection: CartSection | undefined = sections.find(
    (sec) => sec.id === requiredCategoryId
  );
  console.log("currentSect",currentSection)
  const totalAmount = currentSection?.items.reduce(
    (sum, item) => sum + (item.price ?? 0) * item.quantity,
    0
  ) ?? 0;
console.log("totalAmount",totalAmount)
  const convenienceFee = 49; // fixed or dynamic
  const taxRate = 0.05; // 5% tax
  const taxes = totalAmount * taxRate;
  const amountPayable = totalAmount + convenienceFee + taxes;
console.log("amountPayable",amountPayable)

  const handlePlaceService = async () => {
    try {

      const payload = {
        method: "razorpay",
        amount: amountPayable,
        // amountPaise: amountPayable * 100,
        currency: "INR",

        sections: sections.map((sec) => ({
          sectionId: sec.id,
          sectionTitle: sec.title,
          items: sec.items.map((item) => ({
            serviceId: item.id,
            title: item.title,
            // tag: item.tag,
            tag: Array.isArray(item.tag) ? (item.tag[0] || null) : item.tag || null, price: item.price,
            quantity: item.quantity,
            image: item.image || "",
            issueType: item.issueType || [],
            requestType: item.requestType || null,
            machineType: item.machineType || null,
          })),
        })),

        address: selectedAddress
          ? {
            house: selectedAddress.house,
            landmark: selectedAddress.landmark,
            text: selectedAddress.text,
          }
          : {},

        agent: agent || {},
        dateTime: dateTime?.date ? new Date(dateTime.date) : new Date(),
      };

      // Step 2: Ask backend to create Razorpay order
      // const res = await fetch("http://localhost:5000/api/homeservices/payment/create-order", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      const res = await fetch("http://localhost:8080/api/homeservices/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const { localOrderId, razorpayOrder, keyId } = await res.json();
      console.log("keyId",keyId,razorpayOrder);


      // Step 3: Open Razorpay Checkout
      const options = {
        key: keyId,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: "JBCONX",
        description: "Service Payment",
        order_id: razorpayOrder.id,
        handler: async function (response: any) {
          try {
            // Extract payment method details from Razorpay response
            // Razorpay gives method in response.metadata, but safer to query backend
            const paymentDetails: any = {};

            if (response.razorpay_payment_id) {
              // Fetch payment details from Razorpay backend (optional)
              // OR capture from frontend UPI/Card selection UI
              // For now we just send placeholders
              paymentDetails.method = "razorpay";
            }

            // Step 4: Verify with backend
            const verifyRes = await fetch("http://localhost:8080/api/homeservices/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                localOrderId,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                ...paymentDetails,
              }),
            });
            const verifyData = await verifyRes.json();
            console.log("verify response", verifyData);

            // if (verifyData.success) {
            //   dispatch(clearCart());
            //   ionRouter.push("/home-services/payment-status", "forward", "push");
            // }
            if (verifyData.success) {
              if (currentSection?.id) {
                dispatch(removeSection({ sectionId: currentSection.id }));
                dispatch(setRequiredCategoryId(null));
              }
              ionRouter.push("/home-services/payment-status", "forward", "push");
            }

            else {
              alert("Payment verification failed. Please try again.");
            }
          } catch (err) {
            console.error("Verify Error:", err);
          }
        },
        theme: { color: "#274C77" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        console.error("Payment failed", response.error);
      });
      rzp.open();
    } catch (err) {
      console.error("Payment Error:", err);
    }
  };

  return (
    <PageLayout
      header={
        <Header title="Order review" type="page" showRightIcon={false} />
      }
    >

      <div className="pb-6 m-2 px-3 space-y-3">
        {/* Services Selected Cards */}

        {currentSection && (
          <div
            key={currentSection.id}
            className="bg-[#F8F9FAFF] rounded-lg border border-[#E5E7EB] shadow p-3"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#6096BAFF] text-sm font-inter font-bold">
                  {currentSection.title}
                </div>
                <div className="text-xs text-custom-black pt-1 font-inter">
                  {currentSection.items.length} Services
                </div>
              </div>
              <IonIcon icon={trashOutline} className="w-5 h-5 text-[#111827]/60" />
            </div>

            <div className="mt-3 grid grid-cols-[64px_1fr] gap-3">
              <div className="w-24 h-16 rounded-md overflow-hidden bg-gray-100">
                {currentSection.items[0]?.image ? (
                  <img
                    src={currentSection.items[0].image}
                    alt="service"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>

              <ul className="text-xs text-custom-black font-inter space-y-1 list-disc ml-14 pt-1">
                {currentSection.items.map((item) => (
                  <li key={item.id}>
                    {item.title} {item.quantity ? `×${item.quantity}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Offer Card */}
        <div className="!mt-1">
          <AllOfferCard
            ribbonText="Up to 20% off all services"
            logoSrc="/assets/images/apart1 (2).jpg"
            title="Membership"
            blurb="Become Prime member and get up to 10–20% off on all services"
            addText="Add"
          />
        </div>

        {/* Service details */}
        <div className="bg-[#F8F9FAFF] rounded-lg  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] p-3 !mt-5">
          <div className="text-[#6096BAFF] text-sm font-inter font-bold">
            Service details
          </div>

          <div className="mt-3 space-y-3">
            {/* Address */}
            {selectedAddress && (
              <div className="flex items-start gap-2  ">
                <IonIcon
                  icon={locationOutline}
                  className="w-5 h-5 text-[#274C77] mt-[2px]"
                />
                <div className="flex-1 text-[13px] text-[#111827]">
                  {/* <p className="font-semibold text-[#274C77]">{selectedAddress.tag}</p> */}
                  <p>
                    {selectedAddress.house ? `${selectedAddress.house}, ` : ""}
                    {selectedAddress.landmark ? `${selectedAddress.landmark}, ` : ""}
                    {selectedAddress.text}
                  </p>
                </div>
                <button
                  className="flex items-center gap-1 text-[11px] text-[#274C77]"
                  onClick={() =>
                    ionRouter.push("/home-services/select-address", "forward", "push")
                  }
                >
                  <IonIcon icon={createOutline} className="w-4 h-4" />
                  <span>Edit</span>
                </button>
              </div>
            )}


            {/* Date Time */}
            {dateTime && (
              <div className="flex items-center gap-2">
                <IonIcon
                  icon={timeOutline}
                  className="w-4 h-4 text-[#274C77]"
                />
                {/* <div className="text-[12px] text-[#111827]">
                  {dateTime.date}
                  {dateTime.time ? `, ${dateTime.time}` : ""}
                </div> */}
                <div className="text-[12px] text-[#111827]">
                  {dateTime.date ? formatDisplayDate(dateTime.date) : ""}
                  {dateTime.time ? ` ,  ${dateTime.time}` : ""}
                </div>
              </div>
            )}

            {/* Agent Selected */}
            {agent && (
              <div>
                <div className="text-[12px] font-semibold text-[#274C77] mb-2">
                  Agent Selected
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border">
                      {agent.image ? (
                        <img
                          src={agent.image}
                          alt={agent.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    <div className="leading-4">
                      <div className="text-[12px] text-[#111827] font-medium">
                        {agent.name}
                      </div>
                      {agent.basicCharge && (
                        <div className="text-[10px] text-[#6B7280]">
                          {agent.basicCharge}
                        </div>
                      )}
                    </div>
                  </div>
                  <CustomButton
                    text="Change Agent"
                    className="h-[28px] px-3 text-[12px] leading-[18px] bg-[#E5F4FF] text-[#274C77] rounded-[6px]"
                    onClick={() => ionRouter.push("/home-services/professionals", "forward", "push")}
                  />

                </div>
              </div>
            )}
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-[#F8F9FAFF] rounded-lg  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] p-3 !mt-5">
          <div className="text-[#6096BAFF] text-sm font-inter font-bold mb-2">
            Payment Summary
          </div>
          <div className="space-y-2 text-[12px] text-[#111827]">
            <div className="flex items-center justify-between">
              <span>Total Amount</span>
              <span>{totalAmount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Convenience Fee</span>
              <span>{convenienceFee}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Taxes and other Charges</span>
              <span>{taxes}</span>
            </div>
            <div className="flex items-center justify-between font-semibold pt-1 border-t">
              <span>Amount Payable</span>
              <span>{amountPayable}</span>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="bg-[#F8F9FAFF] rounded-lg shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]">
          <button onClick={() => setIsCancellation(true)} className="w-full text-left px-3 py-2 text-[12px] text-[#111827] flex items-center justify-between">
            <span>Cancellation Policy</span>
            <IonIcon
              icon={chevronForwardOutline}
              className="w-4 h-4 text-[#111827]/60"
            />
          </button>

          <CancellationPolicyModal
            isOpen={isCancellation}
            onClose={() => setIsCancellation(false)}
          />
        </div>
        <div className="bg-[#F8F9FAFF] rounded-lg  shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]">
          <button onClick={() => setIsTerms(true)} className="w-full text-left px-3 py-2 text-[12px] text-[#111827] flex items-center justify-between">
            <span>Terms and conditions</span>
            <IonIcon
              icon={chevronForwardOutline}
              className="w-4 h-4 text-[#111827]/60"
            />
          </button>
          <TermsConditionsPolicyModal
            isOpen={isTerms}
            onClose={() => setIsTerms(false)}
          />
        </div>

        {/* Checkout button */}
        <div className="pt-1">
          <CustomButton
            text="Checkout"
            className="w-full h-[36px] text-[14px] leading-[22px] text-custom-black bg-[#E5F4FFFF] rounded-[8px]"
            onClick={handlePlaceService}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default OrderReviewPage;
