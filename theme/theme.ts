import { extendTheme } from "@chakra-ui/react";
import "@fontsource/encode-sans-semi-condensed";
import "@fontsource/galada";

const theme = extendTheme({
  fonts: {
    encode: `'encode sans semi condensed', sans-serif`,
    galada: `'galada', sans-serif`,
    atomicMarker: `'Atomic Marker', sans-serif`,
    atomicMarkerExtra: `'Atomic Marker Extra', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "encode",
        letterSpacing: "0.04em",
      },
    },
  },
  colors: {
    brand: {
      primary: "#1f114d",
    },
  },
  styles: {
    global: {
      "html, body, #root": {
        h: "100%",
        minHeight: "100%",
      },
    },
  },
});

export default theme;
