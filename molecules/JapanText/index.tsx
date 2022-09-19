import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";

const JapanText = () => {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bannerAnimation = useAnimationControls();

  const bannerVariants = {
    active: {
      translateX: isMobile ? "300%" : "500%",
      translateY: isMobile ? "60%" : "50%",
      rotate: "90deg",
    },
    disabled: {
      translateX: "0px",
      translateY: "0px",
      rotate: "0deg",
    },
  };

  useEffect(() => {
    bannerAnimation.start(isOpen ? "active" : "disabled");
  }, [bannerAnimation, isOpen]);

  return (
    <>
      <motion.div
        animate={bannerAnimation}
        variants={bannerVariants}
        style={{
          position: "absolute",
          width: isMobile ? "48px" : "72px",
          height: !isMobile ? "120%" : isOpen ? "100%" : "120%",
          background: "white",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: "1",
          borderRadius: isOpen ? "40px" : "0px 0px 40px 40px",
          color: isOpen ? "black" : "white",
          textAlign: "center",
          fontSize: "30px",
          cursor: "pointer",
        }}
        onClick={() => setOpen(!isOpen)}
      >
        <Text
          transform={{
            base: "rotate(-90deg) translateY(-200%) translateX(-50%)",
            md: "rotate(-90deg) translateY(-120%) translateX(-90%)",
          }}
          display={isOpen ? "block" : "none"}
          width={isOpen ? "max-content" : "auto"}
          fontFamily="atomicMarker"
          fontSize="32px"
        >
          Exceed your limits
        </Text>
      </motion.div>

      <Text
        textAlign="center"
        maxW="min-content"
        cursor="pointer"
        userSelect="none"
        color={isOpen ? "white" : "black"}
        onClick={() => setOpen(!isOpen)}
        zIndex="20"
      >
        限界を超えろ
      </Text>
    </>
  );
};

export default JapanText;
