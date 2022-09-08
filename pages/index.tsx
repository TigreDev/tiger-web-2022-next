import { ToastPosition, useBreakpointValue, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import CustomToast from "../atoms/CustomToast/CustomToast";
import MainContainer from "../atoms/MainContainer";
import Name from "../molecules/Name/Name";

const Landing = () => {
  const toast = useToast();
  const position = useBreakpointValue({
    base: "bottom-left",
    md: "top-left",
  }) as ToastPosition;

  useEffect(() => {
    setTimeout(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer
      mainSX={{
        bgColor: "purple.400",
        bg: "url('largerTiger.png')",
        bgRepeat: "no-repeat",
        bgSize: "cover",
        bgPosition: { base: "initial", md: "right top" },
        bgAttachment: "fixed",
      }}
      innerSX={{}}
    >
      <Name />
    </MainContainer>
  );
};

export default Landing;
