const MenuItem = ({ itemName, setMenu }) => {
  return (
    <div
      className="ml-8 flex h-14 w-64 items-center"
      onClick={() => setMenu(itemName)}
    >
      <span className="text-medium leading-medium text-primaryDefaultText">
        {itemName}
      </span>
    </div>
  );
};

export default MenuItem;
