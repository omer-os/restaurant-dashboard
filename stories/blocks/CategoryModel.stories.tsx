import CategoryModel from "@components/blocks/modal/CategoryModal";
import { useState } from "react";

export default {
  title: "Blocks/CategoryModel",
  component: CategoryModel,
};

export const Default = () => {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <CategoryModel
        open={showModal}
        setOpen={setShowModal}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        categoryDescription={categoryDescription}
        setCategoryDescription={setCategoryDescription}
        categoryImage={categoryImage}
        onSave={() => alert("Save")}
        setCategoryImage={setCategoryImage}
      />
    </>
  );
};
