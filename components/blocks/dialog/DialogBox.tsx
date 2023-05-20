"use client";
import React, { useState } from "react";

interface DialogBoxProps {
  triggerButton: React.ReactNode;
  children: React.ReactNode;
  title?: React.ReactNode;
  ActionsComponent?: React.ReactNode;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  triggerButton,
  children,
  title,
  ActionsComponent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div onClick={toggleModal} className="inline-block">
        {triggerButton}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
            onClick={toggleModal}
            className="fixed inset-0 bg-black/50 z-40"
          ></div>

          <div className="bg-white max-h-[90vh] overflow-y-scroll p-6 rounded-lg shadow-xl max-w-sm relative z-50">
            {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
            <div className="flex justify-center">{children}</div>

            {ActionsComponent}
          </div>

        </div>
      )}
    </div>
  );
};

export default DialogBox;
