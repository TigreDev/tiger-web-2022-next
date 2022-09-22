import { motion, Variants } from "framer-motion";
import Image from "next/image";
import RoseSticker from "public/img/RoseSticker.png";
import GraffitiWall from "public/img/GraffitiWall.png";

const RoundSticker = ({ orientation }: { orientation: "left" | "right" }) => {
  const stickerVariants: Variants = {
    offScreen: {
      rotateY: orientation === "left" ? "90deg" : "-90deg",
      transformOrigin: orientation,
    },
    onScreen: {
      rotateY: 0,
      transformOrigin: orientation,
    },
    peel: {
      rotateY: 0,
      transformOrigin: orientation,
    },
  };
  const peelVariants: Variants = {
    offScreen: {
      rotateY: orientation === orientation ? "90deg" : "-90deg",
      transformOrigin: orientation,
      translateX: 0,
    },
    onScreen: {
      rotateY: 0,
      transformOrigin: orientation,
      translateX: 0,
    },
    peel: {
      translateX: orientation === "left" ? -2000 : 2000,
      transition: {
        delay: 1.2,
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      initial="offScreen"
      whileInView={["onScreen", "peel"]}
      viewport={{ amount: 0.8, once: true }}
      transition={{ delay: 0.3, times: [1, 1] }}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image
        src={GraffitiWall}
        alt="wall"
        layout="fill"
        style={{ zIndex: 1 }}
      />
      <motion.div
        style={{
          borderRadius: "50%",
          width: "70%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.5)",
          position: "absolute",
          zIndex: 3,
        }}
        transition={{ delay: 0.3, duration: 1 }}
        variants={peelVariants}
      />
      <motion.img
        src={RoseSticker.src}
        alt="sticker"
        variants={stickerVariants}
        transition={{ delay: 0.3, duration: 1 }}
        style={{
          zIndex: 2,
          width: "70%",
        }}
      />
    </motion.div>
  );
};

export default RoundSticker;
