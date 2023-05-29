// "use client";

// import React, {
//   useState,
//   useRef,
//   ReactNode,
//   ReactElement,
//   ChangeEvent,
//   useEffect,
// } from "react";
// import { storage } from "@lib/firebase";
// import {
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
//   UploadTask,
// } from "firebase/storage";

// interface UploadImageWrapperProps {
//   children: ReactNode;
//   setImageUrl: any
// }

// const UploadImageWrapper = ({
//   children,
//   setImageUrl,
// }: UploadImageWrapperProps): ReactElement => {
//   const [image, setImage] = useState<File | null>(null);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files ? e.target.files[0] : null;
//     if (file) {
//       const fileType = file.type;
//       const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

//       if (validImageTypes.includes(fileType)) {
//         setError(null);
//         setImage(file);
//       } else {
//         setError("Please select an image to upload");
//       }
//     }
//   };

//   useEffect(() => {
//     if (image) {
//       const handleUpload = async () => {
//         const storageRef = ref(storage, `images/${image.name}`);
//         setUploading(true);
//         const uploadTask: UploadTask = uploadBytesResumable(storageRef, image);

//         uploadTask.on(
//           "state_changed",
//           () => {
//             // Handle upload task progress if needed
//           },
//           (error) => {
//             // Handle upload error if needed
//             console.error("Upload error:", error);
//           },
//           () => {
//             // Upload completed successfully, get download URL
//             getDownloadURL(uploadTask.snapshot.ref)
//               .then((downloadURL) => {
//                 setImageUrl(downloadURL);
//               })
//               .catch((error) => {
//                 console.error("Error getting download URL:", error);
//               })
//               .finally(() => {
//                 setUploading(false);
//               });
//           }
//         );
//       };

//       handleUpload();
//     }
//   }, [image, setImageUrl]);

//   const handleWrapperClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   return (
//     <div onClick={handleWrapperClick}>
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: "none" }}
//         onChange={handleImageChange}
//       />

//       {error && <p>{error}</p>}

//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child as ReactElement, { image, uploading });
//       })}
//     </div>
//   );
// };

// export default UploadImageWrapper;
import React from 'react'

export default function UploadImageComponent() {
  return (
    <div>UploadImageComponent</div>
  )
}
