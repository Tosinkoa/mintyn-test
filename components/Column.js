import Image from "next/image";

export const GoodsColumn = [
  {
    Header: "User",
    id: "User",
    accessor: (d) => (
      <div className="inline-flex  space-x-4 ">
        <Image src={d.img} alt="user" className="rounded-full" height={50} width={50} />
        <p className="inline-flex mt-4" >{d.goods}</p>
      </div>
    ),
  },
  { Header: "Price", accessor: "price" },
  { Header: "Transaction-No", accessor: "transaction-no" },
  { Header: "Time", accessor: "time" },
  { Header: "Status", accessor: "pending" },
];
