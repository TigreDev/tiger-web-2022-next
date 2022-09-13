import {
  Flex,
  FlexProps,
  mergeThemeOverride,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
  mainSX?: FlexProps;
  innerSX?: FlexProps;
  bgImage?: ImageProps["src"];
  bgImageProps?: Omit<Omit<ImageProps, "src">, "alt">;
}

interface MainContainerStyles {
  mainSX?: FlexProps;
  innerSX?: FlexProps;
  bgImageSX?: ImageProps;
}

const MainContainer = ({
  children,
  mainSX = {},
  innerSX = {},
  bgImageProps = {},
  bgImage,
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
      minH: "100vh",
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
      {bgImage && (
        <Image src={bgImage} alt="bgImage" {...bgImageProps} priority />
      )}
      <Flex
        {...themeStyles.innerSX}
        data-testid="mainContainer-inner"
        zIndex="10"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default MainContainer;
