import React from "react";
import MainContainer from "../../atoms/MainContainer";
import Name from "../../molecules/Name";
import largerTiger from "/public/img/largerTiger.png";

const Hero = () => {
  return (
    <MainContainer
      bgImage={largerTiger}
      bgImageProps={{
        layout: "fill",
        objectPosition: "left",
        objectFit: "cover",
      }}
      mainSX={{
        bgColor: "purple.400",
      }}
      innerSX={{
        align: "center",
        justifyContent: "center",
      }}
    >
      <Name />
    </MainContainer>
  );
};

export default Hero;
