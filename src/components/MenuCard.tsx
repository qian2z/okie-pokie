import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MyMenu } from "../data/menu";
import bowl from "../assets/bowl.png";
import SauceBadge from "./SauceBadge";
import CalorieBar from "./CalorieBar";

interface Props {
  menu: MyMenu;
}

const MenuCard = ({ menu }: Props) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      maxW="sm"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        objectFit="cover"
        boxSize="200px"
        src={bowl}
        alt="bowl"
        borderRadius="lg"
        mt={3}
      />
      <Stack mt={3} spacing={0}>
        <CardBody>
          <Heading size="lg">{menu.name}</Heading>
          <CalorieBar
            calories={menu.calories}
            carbs={menu.carbs}
            protein={menu.protein}
          />
          <Text py="2">{menu.ingredients}</Text>
          <SauceBadge
            sauce={menu.sauce}
            spicy={menu.spicy}
            color={menu.color}
          />
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            {menu.price}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default MenuCard;
