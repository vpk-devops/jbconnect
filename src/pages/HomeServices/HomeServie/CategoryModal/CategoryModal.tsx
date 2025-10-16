import React from "react";
import CustomModal from "../../../../components/Common/CustomModal/CustomModal";

interface ItemProps {
  name: string;
  image: string;
  onClick: () => void;
}

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: ItemProps[];
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  isOpen,
  onClose,
  title,
  items,
}) => {

  // console.log("items",items)
  const isApplianceRepair = title.includes("Appliance Repair");
const normalize = (name: string) => name.replace(/ Service/i, "").trim();

const homeAppliances = items.filter((i) =>
  ["AC", "TV", "Laptop", "Washing Machine", "Geyser"].includes(normalize(i.name))
);

const kitchenAppliances = items.filter((i) =>
  ["Refrigerator", "Microwave", "Stove", "Chimney", "Water Purifier", "Dish Washer"].includes(normalize(i.name))
);
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={title}>
      {isApplianceRepair ? (
        <div className="p-3">
          {/* Home Appliances */}
          <h3 className="font-bold text-sm text-custom-black mb-3">Home appliances</h3>
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            {homeAppliances.map((item, idx) => (
              <div key={idx} onClick={item.onClick} className="cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto w-20 h-14 object-cover rounded-full border border-gray-200 shadow-sm"
                />
                <p className="text-[10px] mt-1 text-custom-black font-medium font-inter">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Kitchen Appliances */}
          <h3 className="font-bold text-sm text-custom-black mb-3">Kitchen appliances</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            {kitchenAppliances.map((item, idx) => (
              <div key={idx} onClick={item.onClick} className="cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto w-20 h-14 object-cover rounded-full border border-gray-200 shadow-sm"
                />
                <p className="text-[10px] mt-1 text-custom-black font-medium font-inter">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
       
        <div className="grid grid-cols-3 gap-4 text-center p-3">
          {items.map((item, index) => (
            <div key={index} onClick={item.onClick} className="cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto w-20 h-14 object-cover rounded-full border border-gray-200 shadow-sm"
              />
              <p className="text-[10px] mt-1 text-custom-black font-medium font-inter">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </CustomModal>
  );
};

export default CategoryModal;
