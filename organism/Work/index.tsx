import React from "react";
import MainContainer from "atoms/MainContainer";
import workBG from "public/img/workBG.jpg";
import { JOB_DATA } from "./const";
import JobElement from "molecules/JobElement";

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
        sx: {
          color: "black",
        },
      }}
    >
      {JOB_DATA.map((job, index) => (
        <JobElement
          key={`${Work.name}-element-${index}`}
          {...job}
          orientation={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </MainContainer>
  );
};

export default Work;
