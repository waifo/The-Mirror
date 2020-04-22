import React from "react";
import styled from "styled-components";
import { H3, Colors, FacebookIcon, Icon } from "../Common";

const SubContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
`;

const ContentHeading = styled(H3)`
  text-align: left;
  background-color: ${Colors.ShadowedSteelGrey};
  color: ${Colors.White};
  line-height: 45px;
`;

const SocialPluginHeading = styled(H3)`
  text-align: center;
  background-color: ${Colors.ShadowedSteelGrey};
  color: ${Colors.White};
  line-height: 45px;
`;

const SocialPluginContainer = styled.div`
  background-color: ${Colors.SwedishLightGrey};
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
const ContentContainer = styled.div``;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Card = styled.div`
  background-color: ${Colors.SwedishLightGrey};
  height: 400px;
`;

const SocialMediaContainer = styled.div``;

const AdContainer = styled.div`
  background-color: ${Colors.SwedishLightGrey};
  width: 100%;
  height: 300px;
`;

const YoutubeContainer = styled.div`
  background-color: ${Colors.SwedishLightGrey};
  width: 100%;
  height: 232px;
`;

export const SubContent = () => (
  <SubContentContainer>
    <ContentContainer>
      <ContentHeading>Recent Posts</ContentHeading>
      <CardContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
    </ContentContainer>
    <SocialMediaContainer>
      <SocialPluginHeading>Social Plugin</SocialPluginHeading>
      <SocialPluginContainer>
        {/* <FacebookIcon
          width="200px"
          height="100px"
          color="#010002"
        ></FacebookIcon> */}
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
      </SocialPluginContainer>
      <SocialPluginHeading>Advertisement</SocialPluginHeading>
      <AdContainer></AdContainer>
      <SocialPluginHeading>Youtube</SocialPluginHeading>
      <YoutubeContainer></YoutubeContainer>
    </SocialMediaContainer>
  </SubContentContainer>
);
