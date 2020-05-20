import styled from "styled-components";
import { Colors } from "./Colors";

export const Tag = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  display: inline-block;
  text-align: center;
  height: 25px;
  padding: 0px 5px;
  background-color: ${Colors.ShadowedSteelGreyRGBA};
  color: ${Colors.White};
`;
