const Sidebar = ({ setValue }) => {
  return (
    <div className="w-64  h-full">
      <div className="flex flex-col ml-10 pt-10 space-y-4">
        <span className="cursor-pointer" onClick={setValue(2)}>
          ус буцлагагч
        </span>
        <span className="cursor-pointer" onClick={setValue(1)}>
          плитка
        </span>
        <span>cat3</span>
      </div>
    </div>
  );
};

export default Sidebar;
