import styled from "styled-components";
import { Colors } from "./";

export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6``;

export const ContentHeading = styled(H3)`
  text-align: left;
  background-color: ${Colors.ShadowedSteelGrey};
  color: ${Colors.White};
  line-height: 45px;
`;

export const ContentHeadingLight = styled(H4)`
  color: ${Colors.Black};
  font-size: 18px;
`;

export const ContentHeadingH3White = styled(H3)`
  color: ${Colors.White};
`;
