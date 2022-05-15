import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const Chart = ({ data }) => {
  return (
    <div className="flex bg-gray-50 mr-2 relative w-7/12">
      <div className="absolute bg-gradient-to-t from-white opacity-70 h-full w-full top-0 bottom-0"></div>
      <div className="barchartbg">
        <Line
          height={200}
          data={data}
          options={{
            scales: {
              x: {
                grid: {
                    display: false,
                },
                ticks: {
                  font: {
                    size: 10,
                  },
                },
              },
              y: {
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

export default Chart;
