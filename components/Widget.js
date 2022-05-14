const Widget = ({ widgetData }) => {
  return (
    <div className="grid lg:grid-cols-4 sm:md:grid-flow-col-2 sm:grid-cols-1 flex-row w-full justify-between">
      {widgetData.map((data, i) => (
        <div key={i} className="flex font-my-font flex-row rounded bg-gray-50 md:max-w-lg p-4  mt-5 justify-center mx-2">
          <div className="flex flex-col">
            <p className="text-sm">{data.title}</p>
            <p className="text-xl ">{data.number}</p>
          </div>
          <div>Chart</div>
        </div>
      ))}
    </div>
  );
};

export default Widget;
