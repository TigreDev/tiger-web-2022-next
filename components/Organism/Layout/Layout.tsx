import React from "react";
import { Flex, useMultiStyleConfig } from "@chakra-ui/react";
import { ImageProps } from "next/image";
import BgImage from "../../Atoms/BgImage/BgImage";

export interface LayoutProps {
  children: React.ReactNode;
  variant?: "complete" | "onlyContent" | "onlyHeader" | "onlyFooter";
  bgImage?: ImageProps["src"];
}

function Layout({ children, bgImage, variant = "complete" }: LayoutProps) {
  const styles = useMultiStyleConfig("Layout", { variant });
  return (
    <>
      {bgImage && <BgImage src={bgImage} />}
      <Flex id="Header" sx={styles.Header} />
      <Flex id="MainContainer" sx={styles.MainContainer}>
        <Flex id="RenderContainer" sx={styles.RenderContainer}>
          {children}
        </Flex>
      </Flex>
      <Flex id="Footer" sx={styles.Footer} />
    </>
  );
}

export default Layout;
