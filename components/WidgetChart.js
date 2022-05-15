import { Line } from "react-chartjs-2";
import { widgetDummyData } from "./DummyData";
import { Chart as ChartJs } from "chart.js/auto";

const WidgetChart = () => {
  return (
    <div className="flex bg-gray-50 mr-2 relative w-7/12 justify-between">
      <div className="absolute bg-gradient-to-t from-white opacity-70 h-full w-full top-0 bottom-0"></div>
      <div className=' w-32'>
          <Line
            
            data={{
              labels: widgetDummyData.map((data) => data.day),
              datasets: [
                {
                  label: "Users",
                  data: widgetDummyData.map((data) => data.users[0]),
                  backgroundColor: "rgba(15, 89, 236, 0.8)",
                  fill: true,
                  lineTension: 0.5,
                  pointRadius: 0
                },
              ],
            }}
            options={{
              maintainAspectRatio: true,
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
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
  );
};

export default WidgetChart;
