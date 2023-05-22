import { Badge, Icon, Text } from "@chakra-ui/react";
import { GiChiliPepper } from "react-icons/gi";

interface Props {
  sauce: string;
  spicy: number;
  color: string;
}

const SauceBadge = ({ sauce, spicy, color }: Props) => {
  const spicyIcons = Array.from({ length: spicy }, (_, index) => (
    <Icon as={GiChiliPepper} key={index} color="red" ml={1} mr={0} />
  ));

  return (
    <Badge fontSize="0.9em" colorScheme={color} borderRadius={5} px={2}>
      {sauce}
      {spicyIcons}
    </Badge>
  );
};

export default SauceBadge;
