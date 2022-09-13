import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "Atomic Marker";
      font-style: normal;
      font-weight: 700;
      src: url("/public/fonts/AtomicMarker.otf") format("otf");
    }
    
    @font-face {
      font-family: "Atomic Marker Extra";
      font-style: normal;
      font-weight: 700;
      src: url("/public/fonts/atomicMarkerExtras.otf") format("otf");
    }
      `}
  />
);

export default Fonts;
