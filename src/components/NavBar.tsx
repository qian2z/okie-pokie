import {
  HStack,
  Heading,
  Img,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

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
