import React from "react";
import Image, { ImageProps } from "next/image";
import { useBreakpointValue } from "@chakra-ui/react";

function BgImage(props: ImageProps) {
  const objectPosition = useBreakpointValue({ base: "left", md: "right" });

  return (
    <Image
      src={props.src}
      layout="fill"
      objectFit="cover"
      objectPosition={objectPosition}
      alt="bgImage"
      id="bgImage"
    />
  );
}

export default BgImage;
