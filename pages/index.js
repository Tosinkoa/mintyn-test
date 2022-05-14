import Chart from "../components/Chart";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Widget from "../components/Widget";
import { DummyData } from "../components/DummyData";

export default function Home() {
  const data = {
    labels: DummyData.map((data) => data.day),
    datasets: [
      {
        label: "Users",
        data: DummyData.map((data) => data.users),
        backgroundColor: "rgba(232, 33, 136, 0.3)",
        fill: true,
        lineTension: 0.5,
      },
      {
        label: "Wallets",
        data: DummyData.map((data) => data.wallets),
        backgroundColor: "rgba(14, 84, 233, 0.3)",
        fill: true,
        lineTension: 0.5,
      },
      {
        label: "Transactions",
        data: DummyData.map((data) => data.transactions),
        backgroundColor: "rgba(233, 223, 14, 0.3)",
        fill: true,
        lineTension: 0.5,
      },
    ],
  };

  const widgetData = [
    {
      title: "Daily Transactions Volume" ,
      number: "2,342",
    },
    {
      title: "Daily Transactions Volume" ,
      number: "4,000,000",
    },
    {
      title: "Total Transaction Volume",
      number: "452,000",
    },
    {
      title: "Daily Transactions Volume" ,
      number: "4,000,000",
    },
  ];


  return (
    <Layout>
      <Widget widgetData={widgetData}/>
      <div className="w-full">
      {/* <Chart data={data} height={200} /> */}
      </div>
      <Table />
    </Layout>
  );
}
