import { Box } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import React from "react";

type orientation = "rightTop" | "leftBottom" | "leftTop" | "rightBottom";

const transformByOrientation = {
  rightTop: { base: "rotate(-80deg)", md: "rotate(-45deg)" },
  leftBottom: { base: "rotate(-50deg)", md: "rotate(-45deg)" },
  leftTop: { base: "rotate(60deg)", md: "rotate(30deg)" },
  rightBottom: { base: "rotate(50deg)", md: "rotate(30deg)" },
};

const translateByOrientation = {
  leftBottom: "20vw",
  leftTop: "20vw",
  rightTop: "-20vw",
  rightBottom: "-20vw",
};

function PaintedText({ text, from }: { text: string; from: orientation }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: translateByOrientation[from],
      }}
      whileInView={{
        translateX: "0px",
        opacity: 1,
      }}
    >
      <Box
        fontFamily="atomicMarker"
        fontWeight="500"
        fontSize={["32px", "72px"]}
        transform={transformByOrientation[from]}
      >
        {text}
      </Box>
    </motion.div>
  );
}

export default PaintedText;
