import { HStack, Icon, Link } from "@chakra-ui/react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const AboutBar = () => {
  return (
    <HStack mt={0} justifyContent="center">
      <HStack>
        <Icon as={AiFillInstagram} boxSize="20px" />
        <Link href="https://www.instagram.com/okie_pokie_bowl/" isExternal>
          @okie_pokie_bowl
        </Link>
      </HStack>
      <HStack>
        <Icon as={AiFillFacebook} boxSize="20px" />
        <Link
          href="https://www.facebook.com/profile.php?id=100092318105950"
          isExternal
        >
          Okie Pokie Bowl
        </Link>
      </HStack>
    </HStack>
  );
};

export default AboutBar;
