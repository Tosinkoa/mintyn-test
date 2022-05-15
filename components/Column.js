import Image from "next/image";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

export const GoodsColumn = [
  {
    Header: "User",
    id: "User",
    accessor: (d) => (
      <div className="inline-flex  space-x-4 ">
        <Image src={d.img} alt="user" className="rounded-full" height={50} width={50} />
        <p className="inline-flex mt-4">{d.goods}</p>
      </div>
    ),
  },
  { Header: "Price", accessor: "price" },
  { Header: "Transaction-No", accessor: "transaction-no" },
  { Header: "Time", accessor: "time" },

  {
    Header: "",
    accessor: "pending",
    Cell: ({ row }) => (
      <div>
        {row.values.pending === "Pending" && (
            <div className="inline-flex  justify-between font-semibold">
            <div className="text-yellow-400 inline-flex border-2 border-gray-400 rounded-full px-4 py-2 w-36">
            <GoPrimitiveDot className="text-lg " />
            <p >
               Pending
            </p>
            </div>
            <IoIosArrowDown className="text-xl ml-1 mt-2" />
          </div>
        )}
        {row.values.pending === "Reconcilled" && (
          <div className="inline-flex  justify-between font-semibold">
            <div className="text-green-500 inline-flex border-2 border-gray-400 rounded-full px-4 py-2 w-36">
            <GoPrimitiveDot className="text-lg " />
            <p >
               Reconcilled
            </p>
            </div>
            <IoIosArrowDown className="text-xl ml-1 mt-2" />
          </div>
        )}
        {row.values.pending === "Un-Reconcilled" && (
            <div className="inline-flex  justify-between font-semibold">
            <div className="text-gray-300 inline-flex border-2 border-gray-400 rounded-full px-4 py-2 w-36">
            <GoPrimitiveDot className="text-lg " />
            <p >
               Un-Reconcilled
            </p>
            </div>
            <IoIosArrowDown className="text-xl ml-1 mt-2" />
          </div>
        )}
      </div>
    ),
  },
];
