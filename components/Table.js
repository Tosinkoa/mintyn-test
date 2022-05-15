import { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import MockData from "./MockData.json";
import { GoodsColumn } from "./Column";
import TableFilter from "./TableFilter";

const Table = () => {
  const columns = useMemo(() => GoodsColumn, []);
  const data = useMemo(() => MockData, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    gotoPage,
    pageCount,
    pageOptions,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  const text = `out of ${pageOptions.length} payments`;

  return (
    <div className="mb-6">
      <p className="text-4xl my-6">Payments</p>
      <div className="inline-flex flex-row w-full">
        <div className="inline-flex">
          <span>Showing</span>
          <select
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-inherit py-1 rounded h-8 text-center -mt-1 text-blue-600 font-semibold"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <div className="space-x-1">
            <span>out</span>
            <span>of</span>
            <span>{pageOptions.length}</span>
            <span>payments</span>
          </div>
        </div>
        <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <div>
          <div className="inline-flex">
            <p className="mx-3">Show</p>
            <select className="px-2 py-1 rounded border-2 border-gray-400 ">
              <option className="bg-gray-50" value="All">All</option>
              <option className="bg-gray-50" value="Reconcilled">Reconcilled</option>
              <option className="bg-gray-50" value="Un-reconcilled">Un-reconcilled</option>
              <option className="bg-gray-50" value="Settled">Settled</option>
              <option className="bg-gray-50" value="Unsettled">Unsettled</option>
            </select>
          </div>
        </div>
      </div>
      <div className="relative w-full mx-auto mt-6 shadow-md">
        <table className="table" {...getTableProps()}>
          <thead className="table_head ">
            {headerGroups.map((headerGroup) => (
              <tr className="table_row" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th scope="col" className="table_head_titles" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr className="table_head_row " {...row.getRowProps()}>
                  {row.cells.map((cell, i) => {
                    return (
                      <td className="table_data min-w-min w-1/5 mx-auto" {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-4 ml-6 inline-flex flex-row text-sm font-semibold justify-between w-full">
        <div>
          Showing
          <span>
            {" "}
            {pageIndex + 1} of {pageOptions.length}{" "}
          </span>
        </div>

        <div className="inline-flex mr-8">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className=" rounded px-2 border-2 border-gray-400 p-2 py-1"
          >
            Previous
          </button>
          <p className="border-2 rounded border-gray-400 p-2 text-white px-4 bg-blue-600">1</p>
          <p className="border-2 rounded p-2 px-4 border-gray-400">2</p>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="rounded px-2 border-2 border-gray-400 p-2 py-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
