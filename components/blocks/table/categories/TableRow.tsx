import TableActions from "./TableActions";

const TableRow = ({
  category,
}: {
  category: {
    image: string;
    name: string;
    itemsNo: number;
    status: boolean | "auto";
    id: string;
  };
}) => {
  const status =
    category.status === true
      ? "Active"
      : category.status === false
      ? "Inactive"
      : "Auto";
  return (
    <tr>
      <td className="px-6 py-4">
        <img className="h-10 w-10 rounded-full" src={category.image} alt="" />
      </td>
      <td className="px-6 py-4 truncate max-w-[9em]">{category.name}</td>
      <td className="px-6 py-4">{category.itemsNo}</td>
      <td className="px-6 py-4">
        <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-blue-700 w-max bg-blue-100 border border-blue-300 ">
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
