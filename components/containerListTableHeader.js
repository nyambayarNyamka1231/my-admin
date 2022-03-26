const ContainerListTableHeader = ({ listName }) => {
  return (
    <div className="mt-8 flex justify-between px-8 ">
      <div>
        <span className="text-lg font-bold">{`All ${listName}`}</span>
      </div>
      <div className="flex w-20 justify-between">
        <span>sort</span>
        <span>filter</span>
      </div>
    </div>
  );
};
export default ContainerListTableHeader;
