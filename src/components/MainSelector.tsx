import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { MyMain, myMains } from "../data/main";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedMain: MyMain;
  onSelectMain: (main: MyMain) => void;
}

const MainSelector = ({ selectedMain, onSelectMain }: Props) => {
  return (
    <Stack marginY={3}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          <Icon as={selectedMain.left_icon} marginRight={2} marginTop={1} />
          {selectedMain.name}
        </MenuButton>
        <MenuList>
          {myMains.map((main) => (
            <MenuItem key={main.name} onClick={() => onSelectMain(main)}>
              <Icon as={main.left_icon} marginRight={2} />
              {main.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default MainSelector;
