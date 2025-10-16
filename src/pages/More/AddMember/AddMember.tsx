import { useState } from "react";
import CustomInputForm from "../../../components/Common/CustomInputForm/CustomInputForm";
import PageLayout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import memberIcon from "/assets/images/member.png";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
const AddMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    relationship: "",
    email: "",
    mobile: "",
  });

  const handleChange = (field: string) => (e: any) => {
    setFormData({ ...formData, [field]: e.detail.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.relationship)
      newErrors.relationship = "Relationship is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <PageLayout
      header={<Header title="Add Member" type="page" showRightIcon={false} />}
    >
      <div className="px-10 pb-4">
        <div className="flex items-center justify-center h-full p-0">
          <div className="w-[156px] h-[130px] rounded-none flex items-center justify-center ">
            <img
              src={memberIcon}
              alt="Member Icon"
              className="object-contain"
            />
          </div>
        </div>
        <div className="">
          <CustomInputForm
          type="text"
            label="Name"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange("name")}
            error={errors.name}
            className=" border border-custom-blue text-custom-black !mb-3"
          />
          <CustomInputForm
          type="text"
            label="Relationship"
            name="relationship"
            placeholder="Enter relationship"
            value={formData.relationship}
             className=" border border-custom-blue text-custom-black !mb-3"
            onChange={handleChange("relationship")}
            error={errors.relationship}
          />
          <CustomInputForm
          type="email"
            label="Email"
            name="email"
            placeholder="Enter mail id"
            value={formData.email}
            onChange={handleChange("email")}
             className=" border border-custom-blue text-custom-black !mb-3"
            error={errors.email}
          />
          <CustomInputForm
            label="Mobile no"
            name="mobile"
            placeholder="Enter mobile no"
            value={formData.mobile}
            onChange={handleChange("mobile")}
             className=" border border-custom-blue text-custom-black !mb-3"
            error={errors.mobile}
            type="tel"
          />

          <CustomButton
            text="Add"
            className="!mt-4 w-28 text-lg text-white bg-[#274C77]  "
            onClick={handleSubmit}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default AddMember;
