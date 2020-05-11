import React from "react";
import styled from "styled-components";

import { Card, Image, H3, Colors, FacebookIcon, Icon } from "../Common";
import Image1 from "../../images/MC-1.jpg";
import Image2 from "../../images/MC-2.jpg";
import Image3 from "../../images/MC-3.jpg";
import Image4 from "../../images/MC-4.jpg";

const SubContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
  margin: 10px;
  padding: 10px;
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
  <div></div>
  // <Card>
  //   <Image src={Image1} />
  // </Card>
  // <Card>
  //   <Image src={Image2} />
  // </Card>
  // <Card>
  //   <Image src={Image3} />
  // </Card>
  // <Card>
  //   <Image src={Image4} />
  // </Card>
  // <SocialMediaContainer>
  //   <SocialPluginHeading>Social Plugin</SocialPluginHeading>
  //   <SocialPluginContainer>
  //     {/* <FacebookIcon
  //       width="200px"
  //       height="100px"
  //       color="#010002"
  //     ></FacebookIcon> */}
  //     <Icon></Icon>
  //     <Icon></Icon>
  //     <Icon></Icon>
  //     <Icon></Icon>
  //     <Icon></Icon>
  //     <Icon></Icon>
  //     <Icon></Icon>
  //     <Icon></Icon>
  //   </SocialPluginContainer>
  //   <SocialPluginHeading>Advertisement</SocialPluginHeading>
  //   <AdContainer></AdContainer>
  //   <SocialPluginHeading>Youtube</SocialPluginHeading>
  //   <YoutubeContainer></YoutubeContainer>
  // </SocialMediaContainer>
);
