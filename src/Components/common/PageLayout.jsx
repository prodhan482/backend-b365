const PageLayout = ({ title, itemCount, onAddClick, children }) => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center px-10">
        <div className="relative flex flex-col justify-center items-center w-full">
          <div className="w-full flex justify-between my-12">
            <h1 className="text-xl font-bold text-[#313649]">
              {title} ({itemCount})
            </h1>
            <button
              onClick={onAddClick}
              className="bg-[#10823A] hover:[#4DB63F] text-white font-bold py-2 px-4 rounded"
            >
              Add {title}
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
