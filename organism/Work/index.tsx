import React from "react";
import MainContainer from "atoms/MainContainer";
import workBG from "public/img/workBG.jpg";

const Work = () => {
  return (
    <MainContainer
      bgImage={workBG}
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
      hola
    </MainContainer>
  );
};

export default Work;
