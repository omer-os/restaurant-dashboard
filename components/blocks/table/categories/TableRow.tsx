import { Category } from "@lib/interfacses";
import TableActions from "./TableActions";

const TableRow = ({ category }: { category: Category }) => {
  const status =
    category.status === true
      ? "Active"
      : category.status === false
      ? "Inactive"
      : "Auto";

  let statusClasses;

  switch (status) {
    case "Active":
      statusClasses = "text-green-700 bg-green-100 border-green-300";
      break;
    case "Inactive":
      statusClasses = "text-red-700 bg-red-100 border-red-300";
      break;
    case "Auto":
      statusClasses = "text-blue-700 bg-blue-100 border-blue-300";
      break;
    default:
      statusClasses = "text-blue-700 bg-blue-100 border-blue-300";
  }

  return (
    <tr>
      <td className="px-6 py-4">
        <img className="h-10 w-10 rounded-full" src={category.image} alt="" />
      </td>
      <td className="px-6 py-4 truncate max-w-[9em]">{category.name}</td>
      <td className="px-6 py-4">{category.itemsNo}</td>
      <td className="px-6 py-4">
        <div
          className={`flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full w-max ${statusClasses}`}
        >
          <div className="text-xs font-normal leading-none max-w-full flex-initial">
            {status}
          </div>
        </div>
      </td>
      <TableActions category={category} />
    </tr>
  );
};

export default TableRow;
