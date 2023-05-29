// "use client";

// import React, { useState, useEffect } from "react";
// import OrderItem from "./OrderItem";
// // import { Order } from "@interfaces/MainInterface";
// import UploadImage from "@components/elements/imageoperations/UploadImageComponent";

// const OrdersTable: React.FC = () => {
//   const [selectedItems, setSelectedItems] = useState<string[]>([]);
//   const [selectAll, setSelectAll] = useState(false);
//   const [orders, setOrders] = useState<Order[]>([
//     {
//       id: "1",
//       userId: "user1",
//       restaurantId: "restaurant1",
//       menuItems: ["item1", "item2"],
//       totalAmount: 5000,
//       status: "Pending",
//       createdAt: "5/23/2023, 3:03:36 PM",
//       updatedAt: "5/23/2023, 3:03:36 PM",
//     },
//     {
//       id: "2",
//       userId: "user2",
//       restaurantId: "restaurant2",
//       menuItems: ["item3", "item4"],
//       totalAmount: 4000,
//       status: "Delivered",
//       createdAt: "5/23/2023, 3:03:36 PM",
//       updatedAt: "5/23/2023, 3:03:36 PM",
//     },
//     {
//       id: "3",
//       userId: "user3",
//       restaurantId: "restaurant2",
//       menuItems: ["item3", "item4"],
//       totalAmount: 4000,
//       status: "Delivered",
//       createdAt: "5/23/2023, 3:03:36 PM",
//       updatedAt: "5/23/2023, 3:03:36 PM",
//     },
//   ]);

//   useEffect(() => {
//     if (selectedItems.length === orders.length && orders.length !== 0) {
//       setSelectAll(true);
//     } else {
//       setSelectAll(false);
//     }
//   }, [selectedItems, orders.length]);

//   const handleDelete = (id: string) => {
//     if (id) {
//       setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
//     }

//     setSelectedItems((prevSelectedItems) =>
//       prevSelectedItems.filter((itemId) => itemId !== id)
//     );
//   };

//   const handleEdit = (id: string) => {
//     // Edit logic goes here
//   };

//   const handleSelectItem = (id: string) => {
//     setSelectedItems((prevSelectedItems) => {
//       if (prevSelectedItems.includes(id)) {
//         return prevSelectedItems.filter((itemId) => itemId !== id);
//       } else {
//         return [...prevSelectedItems, id];
//       }
//     });
//   };

//   const handleSelectAll = () => {
//     if (selectAll) {
//       setSelectedItems([]);
//     } else {
//       setSelectedItems(orders.map((order) => order.id));
//     }
//   };

//   const columns = [
//     { title: "ID" },
//     { title: "User ID" },
//     { title: "Menu Items" },
//     { title: "Total Amount" },
//     { title: "Status" },
//     { title: "Created At" },
//     { title: "Updated At" },
//     { title: "Action" },
//   ];

//   return (
//     <div className="relative overflow-x-auto sm:rounded-lg p-5 bg-white ">
//       <table className="w-full text-sm text-left text-gray-500 ">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
//           <tr>
//             <th scope="col" className="p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-all-search"
//                   type="checkbox"
//                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
//                   checked={selectAll}
//                   onChange={handleSelectAll}
//                 />
//                 <label htmlFor="checkbox-all-search" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </th>
//             {columns.map((column) => (
//               <th
//                 key={column.title}
//                 scope="col"
//                 className={"px-6 py-3 min-w-max"}
//               >
//                 {column.title}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, index) => (
//             <OrderItem
//               key={order.id + index}
//               order={order}
//               handleDelete={() => handleDelete(order.id)}
//               handleEdit={handleEdit}
//               handleSelectItem={handleSelectItem}
//               isSelected={selectedItems.includes(order.id)}
//             />
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <button
//           className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 mt-4 rounded"
//           onClick={() => selectedItems.forEach((id) => handleDelete(id))}
//           disabled={selectedItems.length === 0}
//         >
//           Delete Selected
//         </button>
//       </div>





      
//     </div>
//   );
// };

// export default OrdersTable;
