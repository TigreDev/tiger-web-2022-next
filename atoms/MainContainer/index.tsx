import { Flex, FlexProps, mergeThemeOverride } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
  mainSX?: FlexProps;
  innerSX?: FlexProps;
  bgImage?: string; // Changed type to string
  bgImageProps?: Omit<ImageProps, "src" | "alt">; // Corrected the type
}

interface MainContainerStyles {
  mainSX?: FlexProps;
  innerSX?: FlexProps;
}

const MainContainer = ({
  children,
  mainSX = {},
  innerSX = {},
  bgImage,
  bgImageProps,
}: MainContainerProps) => {
  const defaultTheme: MainContainerStyles = {
    mainSX: {
      minH: { base: "-webkit-fill-available", md: "100vh" },
      direction: "column",
      align: "center",
      color: "white",
      position: "relative",
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
      {bgImage && <Image src={bgImage} alt="bgImage" {...bgImageProps} />}
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
