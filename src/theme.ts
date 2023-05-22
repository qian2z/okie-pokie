import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  config,
});

export default theme;
