import { useState } from "react";
import CustomInputForm from "../../../components/Common/CustomInputForm/CustomInputForm";
import PageLayout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import profileImage from "/assets/images/D1.jpg";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
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
      header={<Header title="EditProfile" type="page" showRightIcon={false} />}
    >
      <div className="px-10 mt-8">
        <div className="flex items-center justify-center h-full p-0">
          <div className="w-[156px] h-[130px] flex items-center justify-center relative">
            <div className="w-28 h-28 rounded-full bg-pink-100 overflow-hidden flex items-center justify-center">
              <img
                src={profileImage}
                alt="no-image"
                className="w-24 h-30 object-cover rounded-full"
              />
            </div>

            <label
              htmlFor="upload-profile"
              className="absolute bottom-1 right-4 cursor-pointer  p-1 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#274C77"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487c.59-.59 1.545-.59 2.135 0l.516.517c.59.59.59 1.545 0 2.135l-.638.638-2.652-2.652.639-.638zM14.21 7.14 4.5 16.85V21h4.15l9.71-9.71-4.15-4.15z"
                />
              </svg>
            </label>

            <input
              type="file"
              id="upload-profile"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const imageURL = URL.createObjectURL(file);
                  console.log("Selected image URL:", imageURL);
                }
              }}
            />
          </div>
        </div>
        <div className="mt-5">
          <CustomInputForm
            label="Name"
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange("name")}
            className=" border border-custom-blue text-custom-black !mb-3"
            error={errors.name}
          />

          <CustomInputForm
            label="Email"
            name="email"
            placeholder="Enter mail id"
            value={formData.email}
            onChange={handleChange("email")}
            className=" border border-custom-blue text-custom-black !mb-3"
            error={errors.email}
          />
          <CustomInputForm
            label="Mobile No"
            name="mobile"
            placeholder="Enter mobile no"
            value={formData.mobile}
            onChange={handleChange("mobile")}
            className=" border border-custom-blue text-custom-black !mb-3"
            error={errors.mobile}
            type="tel"
          />
          <div className="flex align-center justify-between pt-6">
            <CustomButton
              text="Save"
              className="mt-4 w-24 text-base text-white bg-[#274C77]  "
              onClick={() => console.log("save")}
            />
            <CustomButton
              text="Cancel"
              className="w-24 mt-4 text-[#274C77] bg-white border border-[#274C77] h-[38px] text-base "
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EditProfile;
