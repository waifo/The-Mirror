import React from "react";
import styled from "styled-components";

import Image1 from "../../images/MC-1.jpg";
import Image2 from "../../images/MC-2.jpg";
import Image3 from "../../images/MC-3.jpg";
import Image4 from "../../images/MC-4.jpg";

import { Colors, Image, Tag, H4 } from "../Common";

const MainContentSectionContainer = styled.div`
  margin: 10px 10px;
  padding: 10px;
  background-color: ${Colors.White};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
const ImageTagTextContainer = styled.div`
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

export const MainContentSection = () => (
  <MainContentSectionContainer>
    {[
      <ImageTagTextContainer>
        <Image src={Image1} />
        <Tag>Fashion</Tag>
        <ContentTitle>
          It is a long established fact that a reader will be distracted by the
          readable
          <TimeStamp>{new Date().toString()}</TimeStamp>
        </ContentTitle>
      </ImageTagTextContainer>,
      <ImageTagTextContainer>
        <Image src={Image2} />
        <Tag>Fashion</Tag>
        <ContentTitle>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
          <TimeStamp>{new Date().toString()}</TimeStamp>
        </ContentTitle>
      </ImageTagTextContainer>,
      <ImageTagTextContainer>
        <Image src={Image3} />
        <Tag>Fashion</Tag>
        <ContentTitle>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
          <TimeStamp>{new Date().toString()}</TimeStamp>
        </ContentTitle>
      </ImageTagTextContainer>,
      <ImageTagTextContainer>
        <Image src={Image4} />
        <Tag>Fashion</Tag>
        <ContentTitle>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here
          <TimeStamp>{new Date().toString()}</TimeStamp>
        </ContentTitle>
      </ImageTagTextContainer>,
      <ImageTagTextContainer>
        <Image src={Image2} />
        <Tag>Fashion</Tag>
        <ContentTitle>
          It is a long established fact that a reader will be distracted by the
          readable
          <TimeStamp>{new Date().toString()}</TimeStamp>
        </ContentTitle>
      </ImageTagTextContainer>,
    ]}
  </MainContentSectionContainer>
);
