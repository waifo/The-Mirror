import React from "react";
import styled from "styled-components";

import { Colors, Image } from "./";

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  justify-items: center;
  height: 300px;
  background-color: ${Colors.SwedishLightGrey};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
`;

const ShortDesc = styled.div`
  align-self: center;
`;

export const Card = ({ content }) => {
  let { thumbnail, shortDesc } = content;
  return (
    <CardContainer>
      <Image src={thumbnail} loading="lazy" />
      <ShortDesc>{shortDesc}</ShortDesc>
    </CardContainer>
  );
};
