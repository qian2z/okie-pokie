import { HStack, Icon, Link, Stack, Tag, TagLabel } from "@chakra-ui/react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const AboutBar = () => (
  <Stack mt={0} display="flex" flexDirection="column" alignItems="center">
    <HStack>
      <Icon as={RiWhatsappFill} boxSize="20px" />
      <Link href="https://wa.me/60176969682" isExternal>
        WhatsApp
      </Link>
      <Tag size="sm" colorScheme="blue">
        <TagLabel>PRE-ORDER HERE</TagLabel>
      </Tag>
    </HStack>
    <HStack>
      <HStack>
        <Icon as={AiFillInstagram} boxSize="20px" />
        <Link href="https://www.instagram.com/okie_pokie_bowl/" isExternal>
          okie_pokie_bowl
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
  </Stack>
);

export default AboutBar;
