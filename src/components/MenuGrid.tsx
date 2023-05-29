import { SimpleGrid } from "@chakra-ui/react";
import MenuCard from "./MenuCard";
import useMenu from "../hooks/useMenu";
import { MyMain } from "../data/main";

interface Props {
  selectedMain: MyMain;
}

const MenuGrid = ({ selectedMain }: Props) => {
  const { menu } = useMenu(selectedMain.name);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacingY={2}
      spacingX={1}
      display="grid"
      justifyContent="center"
      justifyItems="center"
    >
      {menu.map((myMenu) => (
        <MenuCard key={myMenu.id} menu={myMenu} />
      ))}
    </SimpleGrid>
  );
};

export default MenuGrid;
