import DeleteDialog from "@components/blocks/dialog/DeleteDialog";
import { useState } from "react";
export default {
  title: "Blocks/DeleteDialog",
  component: DeleteDialog,
};

export const Default = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <DeleteDialog
        open={showModal}
        setOpen={setShowModal}
        description="Are you sure you want to delete this category?"
        title="Delete Category?"
        onDelete={() => alert("Delete")}
      />
    </>
  );
};
