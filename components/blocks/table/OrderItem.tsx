"use client";

import React from "react";
import { Order } from "@interfaces/MainInterface";

interface OrderItemProps {
  order: Order;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
  handleSelectItem: (id: string) => void;
  isSelected: boolean;
}

const OrderItem: React.FC<OrderItemProps> = ({
  order,
  handleDelete,
  handleEdit,
  handleSelectItem,
  isSelected,
}) => {
  return (
    <tr>
      <td className="p-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => handleSelectItem(order.id)}
        />
      </td>
      <td className="px-6 py-3">{order.id}</td>
      <td className="px-6 py-3">{order.userId}</td>
      <td className="px-6 py-3">{order.menuItems.join(", ")}</td>
      <td className="px-6 py-3">{order.totalAmount}</td>
      <td className="px-6 py-3">{order.status}</td>
      <td className="px-6 py-3">
        {new Date(order.createdAt).toLocaleString()}
      </td>
      <td className="px-6 py-3">
        {new Date(order.updatedAt).toLocaleString()}
      </td>
      <td className="px-6 py-3">
        <button onClick={() => handleEdit(order.id)}>Edit</button>
        <button onClick={() => handleDelete(order.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default OrderItem;
