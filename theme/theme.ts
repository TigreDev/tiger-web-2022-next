import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {},
  sizes: {
    content: "1260px",
  },
  styles: {
    global: {
      "html, body, #root, #__next": {
        h: "100%",
        minHeight: "100%",
      },
    },
  },
});

export default theme;
