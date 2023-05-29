import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MenuGrid from "./components/MenuGrid";
import AboutBar from "./components/AboutBar";
import MainSelector from "./components/MainSelector";
import { useState } from "react";
import { myMains } from "./data/main";

function App() {
  const [main, setMain] = useState(myMains[0]);

  return (
    <Grid templateRows="70px 1fr" rowGap={2}>
      <GridItem bg="#fef08f">
        <NavBar />
      </GridItem>
      <GridItem>
        <AboutBar />
      </GridItem>
      <GridItem>
        <Stack mx={1}>
          <MainSelector
            selectedMain={main}
            onSelectMain={(main) => setMain(main)}
          />
          <MenuGrid selectedMain={main} />
        </Stack>
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
