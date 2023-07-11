import { HStack, Stack, Tag, TagLabel, Text } from "@chakra-ui/react";

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
        {calories !== "" && (
          <>
            <Tag size="sm" colorScheme="teal">
              <TagLabel>ENERGY</TagLabel>
            </Tag>
            <Text>{calories}</Text>
          </>
        )}
      </HStack>
      <HStack mt={1}>
        {carbs !== "" && (
          <>
            <Tag size="sm" colorScheme="purple">
              <TagLabel>CARBS</TagLabel>
            </Tag>
            <Text>{carbs}</Text>
          </>
        )}
        {protein !== "" && (
          <>
            <Tag size="sm" colorScheme="green">
              <TagLabel>PROTEIN</TagLabel>
            </Tag>
            <Text>{protein}</Text>
          </>
        )}
        {fats !== "" && (
          <>
            <Tag size="sm" colorScheme="orange">
              <TagLabel>FATS</TagLabel>
            </Tag>
            <Text>{fats}</Text>
          </>
        )}
      </HStack>
    </Stack>
  );
};

export default CalorieBar;
