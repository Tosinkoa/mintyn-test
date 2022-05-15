import WidgetChart from "./WidgetChart";

const Widget = ({ widgetData }) => {
  return (
    <div className="widget_background">
      {widgetData.map((data, i) => (
        <div key={i} className="widget_sec_bg">
          <div className="flex flex-col">
            <p className="text-sm">{data.title}</p>
            <p className="text-xl ">{data.number}</p>
          </div>
          <WidgetChart />
        </div>
      ))}
    </div>
  );
};

export default Widget;
