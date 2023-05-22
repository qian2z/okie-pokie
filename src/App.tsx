import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateRows="50px 1fr" rowGap="2px">
      <GridItem bg="#fef08f">
        <NavBar />
      </GridItem>
      <GridItem bg="blue">Main</GridItem>
    </Grid>
  );
}

export default App;
