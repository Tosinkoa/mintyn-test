const Widget = () => {
  return (
    <div className="flex flex-row rounded-lg bg-gray-50 max-w-fit p-4  mt-5 justify-center">
      <div className="flex flex-col">
        <p className="text-lg"> Daily Transaction Volume</p>
        <p className="text-2xl font-my-font">2,342</p>
      </div>
      <div>
          Chart
      </div>
    </div>
  );
};

export default Widget;
