import { Flex, FlexProps, mergeThemeOverride } from "@chakra-ui/react";
import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
  mainSX?: FlexProps;
  innerSX?: FlexProps;
}

interface MainContainerStyles {
  mainSX?: FlexProps;
  innerSX?: FlexProps;
}

const MainContainer = ({
  children,
  mainSX = {},
  innerSX = {},
}: MainContainerProps) => {
  const defaultTheme: MainContainerStyles = {
    mainSX: {
      minH: { base: "-webkit-fill-available", md: "100vh" },
      direction: "column",
      align: "center",
      color: "white",
    },
    innerSX: {
      w: "full",
      minH: { md: "100vh" },
      maxW: "1140px",
      flexDir: "column",
      align: "center",
      px: { base: 6, lg: 0 },
    },
  };

  const themeStyles = {
    mainSX: mergeThemeOverride(defaultTheme.mainSX, mainSX),
    innerSX: mergeThemeOverride(defaultTheme.innerSX, innerSX),
  };

  return (
    <Flex {...themeStyles.mainSX} data-testid="mainContainer-outter">
      <Flex {...themeStyles.innerSX} data-testid="mainContainer-inner">
        {children}
      </Flex>
    </Flex>
  );
};

export default MainContainer;
