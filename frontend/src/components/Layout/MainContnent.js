import React from "react";
import styled, { css } from "styled-components";

import { Colors, Image, Tag, H4, mediaQuery, Shimmer } from "../Common";

const MainContentSectionContainer = styled.div`
  height: 300px;
  border-radius: 5px;
  position: relative;
  transition: opacity 0.36s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:nth-child(1) {
    grid-row: 1/3;
    height: 610px;
  }
  ${mediaQuery.mobile(css`
    &:nth-child(1) {
      grid-row: 1/1;
      height: 300px;
    }
  `)}
  background-color: lightgrey;
`;

const ContentTitle = styled.div`
  color: ${Colors.White};
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 5px;
  background-color: ${Colors.ShadowedSteelGreyRGBA};
`;
const StoryHeading = styled(H4)`
  margin: 2px;
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
        <StoryHeading>{shortDesc}</StoryHeading>
      </ContentTitle>
    </MainContentSectionContainer>
  );
};
