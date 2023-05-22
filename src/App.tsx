import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MenuGrid from "./components/MenuGrid";
import AboutBar from "./components/AboutBar";

function App() {
  return (
    <Grid templateRows="70px 1fr" rowGap={2}>
      <GridItem bg="#fef08f">
        <NavBar />
      </GridItem>
      <GridItem>
        <AboutBar />
      </GridItem>
      <GridItem>
        <MenuGrid />
      </GridItem>
      <GridItem>
        <Text textAlign="center" fontSize="sm" fontWeight="bold" mb={2}>
          Copyright &copy; OKIE POKIE BOWL 2023
        </Text>
      </GridItem>
    </Grid>
  );
}

export default App;
