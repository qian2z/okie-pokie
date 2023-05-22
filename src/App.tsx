import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateRows="70px 1fr" rowGap="2px">
      <GridItem bg="red">NavBar</GridItem>
      <GridItem bg="blue">Main</GridItem>
    </Grid>
  );
}

export default App;
