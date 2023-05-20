"use client";

import { useAuth } from "@clerk/nextjs";
import { Menu } from "@prisma/client";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function CategoriesTable({
  restaurant,
}: {
  restaurant: Menu[];
}) {
  const { userId } = useAuth();

  // Dummy data for the table. Replace this with your actual data.
  const data = [
    {
      id: "1",
      name: "Item 1",
      description: "Item 1 Description",
      number: "10",
    },
    {
      id: "2",
      name: "Item 2",
      description: "Item 2 Description",
      number: "20",
    },
    // ...add more data
  ];

  console.log(restaurant);
  

  const handleDelete = (id: string) => {
    console.log(`Deleting item with id ${id}`);
    // Implement delete functionality
  };

  const handleEdit = (id: string) => {
    console.log(`Editing item with id ${id}`);
    // Implement edit functionality
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Number
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.number}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="text-blue-600 hover:text-blue-900 mr-2 hover:bg-blue-200 rounded-full p-2 hover:ring-1 ring-blue-600"
                >
                  <FiEdit2 />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:text-red-900 hover:bg-red-200 rounded-full p-2 hover:ring-1 ring-red-600"
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
