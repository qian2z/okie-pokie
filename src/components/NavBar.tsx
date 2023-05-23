import { HStack, Heading, Img } from "@chakra-ui/react";
import logo from "../assets/logo.png";

export const NavBar = () => {
  return (
    <HStack
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Img src={logo} boxSize="70px" />
      <Heading fontSize="2xl" fontWeight="bold">
        POKIE MENU
      </Heading>
    </HStack>
  );
};

export default NavBar;
