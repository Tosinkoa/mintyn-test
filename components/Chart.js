import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Chart = ({ data }) => {
  return (
    <div className="chart_background">
      <div className="label_background">
        <p className="font-bold text-lg ">Today: 5, Aug 2018</p>
        <div>
          <select className="chart_select">
            <option defaultValue="1 Jan - 1 Jun" value="1 Jan - 1 Jun">1 Jan - 1 Jun</option>
          </select>
        </div>
        <div className="inline-flex space-x-2">
          <MdKeyboardArrowLeft className=" chart_arrows"/>
          <MdKeyboardArrowRight className=" chart_arrows"/>
        </div>
      </div>
      <div className="relative">
        <div className="chart_overlay"></div>
        <div>
          <Line
            height={100}
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
