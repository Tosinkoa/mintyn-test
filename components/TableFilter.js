import { FaSearch } from "react-icons/fa";

const TableFilter = ({ filter, setFilter }) => {
  return (
    <div className="w-full md:flex sm:inline-flex">
      <span className=" sm:inline-flex  mx-auto border-gray-400 border-b-2">
        <FaSearch className="text-gray-600 border sm:hidden md:inline-flex mr-2 mt-1" />
        <input
          value={filter || ""}
          className=" bg-inherit border-0 mx-2 rounded w-2/4 placeholder:text-sm placeholder:text-gray-400 active:outline-none focus:outline-none"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search payments"
        />
      </span>
    </div>
  );
};

export default TableFilter;
