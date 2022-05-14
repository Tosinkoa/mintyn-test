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

  return (
    <Layout>
      <Widget />
      <div className="w-full">
      {/* <Chart data={data} height={200} /> */}
      </div>
      <Table />
    </Layout>
  );
}
