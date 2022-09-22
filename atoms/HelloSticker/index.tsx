import { motion, Variants } from "framer-motion";
import Image from "next/image";
import EasySticker from "public/img/EasySticker.png";
import NotForYou from "public/img/NotForYou.png";

const HelloSticker = ({ orientation }: { orientation: "left" | "right" }) => {
  const stickerVariants: Variants = {
    offScreen: {
      rotateY: orientation === "left" ? "90deg" : "-90deg",
      transformOrigin: orientation,
    },
    onScreen: {
      rotateY: orientation === "left" ? "30deg" : "-30deg",
      transformOrigin: orientation,
    },
    peel: {
      rotateY: orientation === "left" ? "30deg" : "-30deg",
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
      rotateY: orientation === "left" ? "30deg" : "-30deg",
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
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Image src={NotForYou} alt="wall" layout="fill" style={{ zIndex: 1 }} />

      <motion.div
        style={{
          width: "80%",
          background: "rgba(255, 255, 255, 0.5)",
          position: "absolute",
          zIndex: 3,
        }}
        transition={{ delay: 0.3, duration: 1 }}
        variants={peelVariants}
      />
      <motion.img
        src={EasySticker.src}
        alt="sticker"
        variants={stickerVariants}
        transition={{ delay: 0.3, duration: 1 }}
        style={{
          zIndex: 2,
          width: "80%",
        }}
      />
    </motion.div>
  );
};

export default HelloSticker;
