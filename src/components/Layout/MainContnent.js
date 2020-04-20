import React from "react";
import styled from "styled-components";

import Image1 from "../../images/MC-1.jpg";
import Image2 from "../../images/MC-2.jpg";
import Image3 from "../../images/MC-3.jpg";
import Image4 from "../../images/MC-4.jpg";

import { Colors, Image, Tag } from "../Common";

const MainContentSectionContainer = styled.div`
  margin: 10px auto;
  padding: 10px;
  background-color: ${Colors.SwedishLightGrey};
  box-shadow: 0 2px 4px rgba(0, 0, , 0.06);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
const ImageTagTextContainer = styled.div`
  position: relative;
  display: inline-block;
  transition: opacity 0.36s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:nth-child(1) {
    grid-row: 1/3;
  }
`;

export const MainContentSection = () => (
  <MainContentSectionContainer>
    {[
      <ImageTagTextContainer>
        <Image src={Image1} />
        <Tag>Fashion</Tag>
      </ImageTagTextContainer>,
      <ImageTagTextContainer>
        <Image src={Image2} />
        <Tag>Fashion</Tag>
      </ImageTagTextContainer>,
      <ImageTagTextContainer>
        <Image src={Image3} />
        <Tag>Fashion</Tag>
      </ImageTagTextContainer>,
      <ImageTagTextContainer>
        <Image src={Image4} />
        <Tag>Fashion</Tag>
      </ImageTagTextContainer>,
      <ImageTagTextContainer>
        <Image src={Image2} />
        <Tag>Fashion</Tag>
      </ImageTagTextContainer>,
    ]}
  </MainContentSectionContainer>
);
