import { HStack, Img, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";

export const NavBar = () => {
  return (
    <HStack
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Img src={logo} boxSize="50px" />
      <Text fontSize="2xl" fontWeight="bold">
        OKIE POKIE BOWL
      </Text>
    </HStack>
  );
};

export default NavBar;
