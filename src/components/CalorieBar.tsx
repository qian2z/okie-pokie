import {
  HStack,
  Stack,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import { AiFillFire } from "react-icons/ai";
import { BiBowlRice } from "react-icons/bi";
import { MdOutlineEgg, MdWaterDrop } from "react-icons/md";

interface Props {
  calories: string;
  carbs: string;
  protein: string;
  fats: string;
}

const CalorieBar = ({ calories, carbs, protein, fats }: Props) => {
  return (
    <Stack mt={3}>
      <HStack>
        {carbs !== "" && (
          <>
            <Tag size="sm" colorScheme="purple">
              <TagLabel>CARBS</TagLabel>
              <TagRightIcon boxSize="10px" as={BiBowlRice} ml={1} mr={0} />
            </Tag>
            <Text>{carbs}</Text>
          </>
        )}
      </HStack>
      <HStack>
        {protein !== "" && (
          <>
            <Tag size="sm" colorScheme="green">
              <TagLabel>PROTEIN</TagLabel>
              <TagRightIcon boxSize="10px" as={MdOutlineEgg} ml={1} mr={0} />
            </Tag>
            <Text>{protein}</Text>
          </>
        )}
      </HStack>
      <HStack>
        {fats !== "" && (
          <>
            <Tag size="sm" colorScheme="orange">
              <TagLabel>FATS</TagLabel>
              <TagRightIcon boxSize="10px" as={MdWaterDrop} ml={1} mr={0} />
            </Tag>
            <Text>{fats}</Text>
          </>
        )}
      </HStack>
      <HStack>
        {calories !== "" && (
          <>
            <Tag size="sm" colorScheme="teal">
              <TagLabel>ENERGY</TagLabel>
              <TagRightIcon boxSize="10px" as={AiFillFire} ml={1} mr={0} />
            </Tag>
            <Text>{calories}</Text>
            <Text as="i">(sauce not included)</Text>
          </>
        )}
      </HStack>
    </Stack>
  );
};

export default CalorieBar;
