import { ComponentMultiStyleConfig } from "@chakra-ui/react/dist/declarations/src";

const LayoutStyles: ComponentMultiStyleConfig = {
  parts: ["Header", "Footer", "MainContainer", "RenderContainer"],
  baseStyle: {
    Header: {
      w: "full",
      h: "80px",
      bgColor: "rgb(35 24 78)",
      position: "fixed",
      zIndex: 99,
    },
    Footer: {
      w: "full",
      h: "200px",
      bgColor: "rgb(35 24 78)",
      zIndex: 100,
    },
    MainContainer: {
      bgColor: "gray.500",
      flexDir: "column",
      alignItems: "center",
      w: "full",
      minH: "full",
      zIndex: 5,
    },
    RenderContainer: {
      minH: "full",
      flexDir: "column",
      alignItems: "center",
      pt: "120px",
      maxW: "1260px",
      w: "full",
      zIndex: 5,
    },
  },
  variants: {
    onlyContent: {
      Header: {
        display: "none",
      },
      RenderContainer: {
        pt: "40px",
      },
      Footer: {
        display: "none",
      },
    },
    onlyHeader: {
      Footer: {
        display: "none",
      },
    },
    onlyFooter: {
      RenderContainer: {
        pt: "40px",
      },
      Header: {
        display: "none",
      },
    },
  },
};

export default LayoutStyles;
