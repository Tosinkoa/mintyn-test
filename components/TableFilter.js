import { FaSearch } from "react-icons/fa";

const TableFilter = ({ filter, setFilter }) => {
  return (
    <div className="w-full flex ">
      <span className="flex my-6 mx-auto border-gray-400 border-b-2">
        <FaSearch className="text-gray-600 border mr-2 mt-1"/>
        <input
          value={filter || ""}
          className=" bg-inherit border-0 mx-2 rounded w-2/4 placeholder:text-sm placeholder:text-gray-400"
          onChange={(e) => setFilter(e.target.value)}
          placeholder='Search payments'
        />
      </span>
    </div>
  );
};

export default TableFilter;
