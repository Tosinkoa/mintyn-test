import { FaSearch } from "react-icons/fa";

const TableFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter_background">
      <span className="sec_background">
        <FaSearch className="search_icon" />
        <input
          value={filter || ""}
          className="input_style"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search payments"
        />
      </span>
    </div>
  );
};

export default TableFilter;
