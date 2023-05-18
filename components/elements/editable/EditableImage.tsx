import React, { ChangeEvent, useState } from "react";

interface EditableImageProps {
  State: string;
  setState: any;
  ImageComponent: React.ReactNode;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  State,
  setState,
  ImageComponent,
}) => {
  const [file, setFile] = useState(""); // Handles input change event and updates state

  function handleChange(event: any) {
    setState(event.target.files[0]);
  }
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {ImageComponent}
      </button>
      <input
        id="fileInput"
        type="file"
        onChange={handleChange}
        className="hidden"
        accept="image/png"
      />
    </div>
  );
};
