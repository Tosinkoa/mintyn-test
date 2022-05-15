import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Chart = ({ data }) => {
  return (
    <div className="flex sm:mb-4 md:mb-0 bg-gray-50 mr-2  lg:w-7/12 sm:w-full flex-col p-8">
      <div className="inline-flex justify-between mb-4">
        <p className="font-bold text-lg ">Today: 5, Aug 2018</p>
        <div>
          <select className="flex border-2 border-gray-400 bg-inherit rounded-md px-4 py-1">
            <option defaultValue="1 Jan - 1 Jun" value="1 Jan - 1 Jun">1 Jan - 1 Jun</option>
          </select>
        </div>
        <div className="inline-flex space-x-2">
          <MdKeyboardArrowLeft className=" border-2 border-gray-400 text-3xl rounded-md"/>
          <MdKeyboardArrowRight className=" border-2 border-gray-400 text-3xl rounded-md"/>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bg-gradient-to-t from-white opacity-70 h-full w-full top-0 bottom-0"></div>
        <div className="barchartbg">
          <Line
            height={200}
            data={data}
            options={{
              maintainAspectRatio: true,
              responsive: true,
              scales: {
                x: {
                  grid: {
                    color: "rgba(94, 142, 236, 0.8)",
                  },
                  ticks: {
                    font: {
                      size: 14,
                    },
                  },
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
