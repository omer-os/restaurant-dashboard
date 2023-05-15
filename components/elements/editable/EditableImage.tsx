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
  const [localSrc, setLocalSrc] = useState(State);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalSrc(reader.result as string);

        setState(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative">
      <button onClick={() => document.getElementById("fileInput")?.click()}>
        {ImageComponent}
      </button>
      <input
        id="fileInput"
        type="file"
        onChange={handleImageChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
};
