import ContainerListTable from "./containerListTable";
const CategoriesList = ({ data, listName = "plitkas" }) => {
  console.log(listName);
  console.log("==========>", data);
  return (
    <div className="min-h-screen w-screen bg-primaryBg px-8">
      <div className="mt-8 flex justify-between">
        <span className="text-2xl font-bold">
          {listName[0].toUpperCase() + listName.substring(1)}
        </span>
        <span className="text-sm">Nyamka/ Admin</span>
      </div>
      <ContainerListTable data={data} listName={listName} />
    </div>
  );
};

export default CategoriesList;
