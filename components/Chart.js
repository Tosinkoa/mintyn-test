import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const Chart = ({data, height }) => {
  return (
    <div className="grid md:col-span-2 ">
      <div className="barchartbg">
        <h1 className="barcharttitle ">Data Report</h1>
        <Line
          height={height}
          data={data}
          options={{
            scales: {
              x: {
                grid: {
                  color: "#F1F5F9",
                },
                ticks: {
                  font: {
                    size: 10,
                  },
                },
              },
              y: {
                grid: {
                  color: "#F1F5F9",
                },
                ticks: {
                  font: {
                    size: 10,
                  },
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  boxWidth: 10,
                  font: {
                    size: 10,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;