import MenuItem from "./menu-item";
import cn from "classnames";
const MainMenu = ({ setMenu }) => {
  const mainMenuClass = "";
  return (
    <div className="w-64 bg-primaryDarkBg">
      <MenuItem itemName="us butsalgagch" setMenu={setMenu} />
      <MenuItem itemName="plitka" setMenu={setMenu} />
    </div>
  );
};
export default MainMenu;
