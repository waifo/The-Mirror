import React from "react";
import styled, { css } from "styled-components";

import { Colors, Image, Tag, H4, mediaQuery, Shimmer } from "../Common";

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
  background-color: lightgrey;
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
      <Image src={thumbnail} loading="lazy" />
      <Tag>{category}</Tag>
      <ContentTitle>
        {shortDesc}
        <TimeStamp>{new Date(createdAt).toString()}</TimeStamp>
      </ContentTitle>
    </MainContentSectionContainer>
  );
};