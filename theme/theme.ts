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
  textStyles: {
    h1: {
      fontSize: { base: "48px", md: "72px" },
      fontWeight: "bold",
      lineHeight: "110%",
    },
    h2: {
      fontSize: { base: "36px", md: "48px" },
      fontWeight: "semibold",
      lineHeight: "110%",
    },
    p: {
      fontSize: { base: "24px", md: "32px" },
      fontWeight: "medium",
      lineHeight: "110%",
    },
  },
  colors: {
    brand: {
      primary: "#1f114d",
      secondary: "#1D1D1D",
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
