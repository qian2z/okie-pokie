import { SimpleGrid } from "@chakra-ui/react";
import { myMenus } from "../data/menu";
import MenuCard from "./MenuCard";

const MenuGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      mx={1}
      spacingY={2}
      display="grid"
      justifyContent="center"
      justifyItems="center"
    >
      {myMenus.map((myMenu) => (
        <MenuCard key={myMenu.id} menu={myMenu} />
      ))}
    </SimpleGrid>
  );
};

export default MenuGrid;
