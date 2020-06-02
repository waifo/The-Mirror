import React from "react";
import styled from "styled-components";

export const ImageEle = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  border-radius: 5px;
  opacity: 0.9;
  ${(props) => (props.customCss ? props.customCss : null)};
`;

export const Image = (props) => {
  let imgArr = props.src.split(".");
  let imgPath = imgArr[0];
  let imgType = imgArr[1];

  return (
    <picture>
      <source
        media="(max-width:480px)"
        srcset={`${imgPath},w_480.${imgType}`}
      />
      <source
        media="(max-width:768px)"
        srcset={`${imgPath},w_768.${imgType}`}
      />
      <source
        media="(max-width:1024px)"
        srcset={`${imgPath},w_1024.${imgType}`}
      />
      <source
        media="(max-width:1200px)"
        srcset={`${imgPath},w_1200.${imgType}`}
      />
      <source
        media="(max-width:1400px)"
        srcset={`${imgPath},w_1400.${imgType}`}
      />
      <ImageEle srcset={props.src} {...props} />
    </picture>
  );
};

// sizes: "(max-width: 1000px) 100vw, 1000px";
// srcset: "covid_z24xur,w_200.jpg 200w,
// covid_z24xur,w_508.jpg 508w,
// covid_z24xur,w_721.jpg 721w,
// covid_z24xur,w_901.jpg 901w,
// covid_z24xur,w_1000.jpg 1000w";
