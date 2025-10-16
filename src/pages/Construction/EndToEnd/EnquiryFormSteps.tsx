import React from "react";
import { useIonRouter } from "@ionic/react";
import PageLayout from "../../../components/Layout/Layout";

import { HeaderStep, MultiStepForm } from "../ConstructionReusableCards";
import { stepsConfig } from "../data";
import Header from "../../../components/Header/Header";

const EnquiryFormSteps: React.FC = () => {
  const ionRouter = useIonRouter();
  const [stepIndex, setStepIndex] = React.useState(0);
  const [formValues, setFormValues] = React.useState<Record<string, any>>({});

  const handleChange = (name: string, value: any) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1); // go to previous step
    } else {
      ionRouter.goBack(); // if on first step, go back in app navigation
    }
  };

  return (
    <PageLayout
      header={
        <Header
          type="page"
          title={stepsConfig[stepIndex].title}     // ✅ dynamic title
        //   subtitle={stepsConfig[stepIndex].subtitle} // ✅ optional subtitle
        //   variant="subtitle"                        // ✅ show title + subtitle
          showRightIcon={false}                     // hide notifications for steps
        />
      }
    >
      <MultiStepForm
        config={stepsConfig[stepIndex]}
        values={formValues}
        onChange={handleChange}
        onNext={() => {
          if (stepIndex < stepsConfig.length - 1) {
            setStepIndex((prev) => prev + 1);
          } else {
            console.log("Final Submit Data:", formValues);
          }
        }}
      />
    </PageLayout>
  );
};

export default EnquiryFormSteps;
