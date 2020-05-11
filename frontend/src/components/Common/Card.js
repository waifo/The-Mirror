import React from "react";
import styled from "styled-components";

import { Colors, Image } from "./";

const CardContainer = styled.div`
  background-color: ${Colors.SwedishLightGrey};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
`;

export const Card = ({ content }) => {
  let { thumbnail } = content;
  return (
    <CardContainer>
      <Image src={thumbnail} />
    </CardContainer>
  );
};
