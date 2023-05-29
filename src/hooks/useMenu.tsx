import { useEffect, useState } from "react";
import { myMenus } from "../data/menu";

const useMenu = (main: string) => {
  const [menu, setMenu] = useState(myMenus);

  useEffect(() => {
    if (main === "All") {
      setMenu(myMenus);
    } else {
      setMenu(myMenus.filter((menu) => menu.main === main));
    }
  }, [main]);

  return { menu };
};

export default useMenu;
