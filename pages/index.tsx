import { ToastPosition, useBreakpointValue, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import CustomToast from "../atoms/CustomToast/CustomToast";
import MainContainer from "../atoms/MainContainer";
import Name from "../molecules/Name/Name";
import largerTiger from "/public/largerTiger.png";

const Landing = () => {
  const toast = useToast();
  const position = useBreakpointValue({
    base: "bottom-left",
    md: "top-left",
  }) as ToastPosition;

  useEffect(() => {
    const toastTimer = setTimeout(() => {
      toast({
        position,
        render: () => (
          <CustomToast
            title="This website is under development"
            desc="Return to see how this progress!"
          />
        ),
      });
    }, 2000);
    return () => {
      clearTimeout(toastTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    >
      <Name />
    </MainContainer>
  );
};

export default Landing;
