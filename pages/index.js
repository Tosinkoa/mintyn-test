import Chart from "../components/Chart";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Widget from "../components/Widget";
import { DummyData, widgetDummyData } from "../components/DummyData";
import Feature from "../components/Feature";

export default function Home() {
  const chartData = {
    labels: DummyData.map((data) => data.day),
    datasets: [
      {
        label: "Users",
        data: DummyData.map((data) => data.users),
        backgroundColor: "rgba(15, 89, 236, 0.8)",
        fill: true,
        lineTension: 0.5,
        pointRadius: 0
      },
    ],
  };

  const widgetChart = {
    labels: widgetDummyData.map((data) => data.day),
    datasets: [
      {
        label: "Users",
        data: DummyData.map((data) => data.users[0]),
        backgroundColor: "rgba(15, 89, 236, 0.8)",
        fill: true,
        lineTension: 0.5,
        pointRadius: 0
      },
    ],
  };

  const widgetData = [
    {
      title: "Daily Transactions Volume",
      number: "2,342",
    },
    {
      title: "Daily Transactions Volume",
      number: "N4,000,000",
    },
    {
      title: "Total Transaction Volume",
      number: "452,000",
    },
    {
      title: "Daily Transactions Volume",
      number: "N4,000,000",
    },
  ];

  return (
    <Layout>
      <div className="w-full">

      <Widget widgetData={widgetData} widgetChart={widgetChart} />
      <div className="w-full">
        <Feature data={chartData} />
      </div>
      <Table />
      </div>
    </Layout>
  );
}
