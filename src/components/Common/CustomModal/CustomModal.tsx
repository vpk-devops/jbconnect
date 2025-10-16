import React from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30  !px-3">
      <div className="bg-white rounded-xl shadow-lg w-[95%] max-w-md  p-3 relative">
        <button
          className="absolute top-3 right-6 text-custom-blue font-bold  hover:text-black pt-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-lg font-bold mb-2 pt-2 px-2  text-custom-blue font-inter">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
