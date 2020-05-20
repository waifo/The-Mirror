import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  border-radius: 5px;
  opacity: 0.9;
  sizes: "(max-width: 1000px) 100vw, 1000px";
  srcset: "covid_z24xur,w_200.jpg 200w,
  covid_z24xur,w_508.jpg 508w,
  covid_z24xur,w_721.jpg 721w,
  covid_z24xur,w_901.jpg 901w,
  covid_z24xur,w_1000.jpg 1000w";
`;
