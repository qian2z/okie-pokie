import { HStack, Icon, Link, Stack, Tag, TagLabel } from "@chakra-ui/react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaWaze } from "react-icons/fa";
import { BiMap } from "react-icons/bi";

const AboutBar = () => (
  <Stack mt={0} display="flex" flexDirection="column" alignItems="center">
    <HStack>
      <Icon as={RiWhatsappFill} boxSize="20px" />
      <Tag size="md" colorScheme="blue">
        <TagLabel>
          <Link href="https://wa.me/60176969682" isExternal>
            PRE-ORDER HERE
          </Link>
        </TagLabel>
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
    <HStack>
      <HStack>
        <Icon as={FaWaze} boxSize="20px" />
        <Tag size="md" colorScheme="green">
          <TagLabel>
            <Link href="https://waze.com/ul/hw281skq4f" isExternal>
              Waze
            </Link>
          </TagLabel>
        </Tag>
      </HStack>
      <HStack>
        <Icon as={BiMap} boxSize="20px" />
        <Tag size="md" colorScheme="green">
          <TagLabel>
            <Link href="https://goo.gl/maps/uxw47anL2KNKsyZv8" isExternal>
              Google Map
            </Link>
          </TagLabel>
        </Tag>
      </HStack>
    </HStack>
  </Stack>
);

export default AboutBar;
