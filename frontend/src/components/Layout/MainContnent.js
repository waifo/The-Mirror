import React from "react";
import styled from "styled-components";

import Image1 from "../../images/MC-1.jpg";
import Image2 from "../../images/MC-2.jpg";
import Image3 from "../../images/MC-3.jpg";
import Image4 from "../../images/MC-4.jpg";

import { Colors, Image, Tag, H4 } from "../Common";

const MainContentSectionContainer = styled.div`
  border-radius: 5px;
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

const ContentTitle = styled(H4)`
  color: ${Colors.White};
  position: absolute;
  left: 10px;
  bottom: 0px;
  margin: 0px;
  font-family: Titillium Web Light;
`;

const TimeStamp = styled.div`
  font-family: Titillium Web Extra Light;
  font-style: italic;
  font-size: 10px;
  margin: 10px 0px 5px 0px;
`;

export const MainContentSection = ({ story }) => {
  let { category, shortDesc, thumbnail, createdBy, createdAt } = story;
  return (
    <MainContentSectionContainer>
      <Image src={thumbnail} />
      <Tag>{category}</Tag>
      <ContentTitle>
        {shortDesc}
        <TimeStamp>{new Date(createdAt).toString()}</TimeStamp>
      </ContentTitle>
    </MainContentSectionContainer>
  );
};
