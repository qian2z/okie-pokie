import { HStack, Stack, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { AiFillFire } from "react-icons/ai";
import { BiBowlRice } from "react-icons/bi";
import { MdOutlineEgg } from "react-icons/md";

interface Props {
  calories: string;
  carbs: string;
  protein: string;
}

const CalorieBar = ({ calories, carbs, protein }: Props) => {
  return (
    <Stack mt={3}>
      {calories !== "" && (
        <Tag size="sm" colorScheme="teal">
          <TagLeftIcon boxSize="10px" as={AiFillFire} />
          <TagLabel>{calories}</TagLabel>
        </Tag>
      )}
      {carbs !== "" && (
        <Tag size="sm" colorScheme="purple">
          <TagLeftIcon boxSize="10px" as={BiBowlRice} />
          <TagLabel>CARBOHYDRATES: {carbs}</TagLabel>
        </Tag>
      )}
      {protein !== "" && (
        <Tag size="sm" colorScheme="green">
          <TagLeftIcon boxSize="10px" as={MdOutlineEgg} />
          <TagLabel>PROTEIN: {protein}</TagLabel>
        </Tag>
      )}
    </Stack>
  );
};

export default CalorieBar;
