import Chart from "../components/Chart";

const Feature = ({ data }) => {
  return (
    <div className="flex w-full mt-4 sm:flex-col lg:flex-row">
      <Chart data={data} />
      <div className="order_payment_bg">
        <div>
          <h1 className="font-bold mt-4 mb-2">Orders</h1>
          <div className="flex w-full h-1.5 ">
            <div className="green_line"></div>
            <div className="orange_line"></div>
          </div>
          <div className="inline-flex mt-2 mb-1 space-x-1">
            <p>Pending Orders:</p>
            <span className="font-bold text-orange-300"> 20</span>
          </div>
          <div className="flex my-1 space-x-1 ">
            <p className="flex">Reconcilled Orders:</p> <span className="font-bold text-green-500">80</span>
          </div>
          <div className="flex my-1 space-x-1">
            <p className="flex">Total Orders:</p> <span className="font-bold text-blue-600"> 100</span>
          </div>
        </div>
        <div className="border-b-4 -ml-10 -mr-20"></div>
        <div>
          <h1 className="font-bold mt-4 mb-2">Payments</h1>
          <div className="flex w-full h-1.5 ">
            <div className="green_line"></div>
            <div className="orange_line"></div>
          </div>
          <div className="inline-flex mt-2 mb-1 space-x-1">
            <p>Pending Orders:</p>
            <span className="font-bold text-orange-300"> 20</span>
          </div>
          <div className="flex my-1 space-x-1">
            <p className="flex">Reconcilled Orders:</p> <span className="font-bold text-green-500">80</span>
          </div>
          <div className="flex my-1 space-x-1">
            <p className="flex">Total Orders:</p> <span className="font-bold text-blue-600"> 100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
