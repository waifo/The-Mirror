import styled from "styled-components";
import { Colors } from "./Colors";

export const Tag = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  display: inline-block;
  text-align: center;
  width: 70px;
  height: 20px;
  background-color: rgba(27, 156, 252, 0.6);
  color: ${Colors.White};
`;
