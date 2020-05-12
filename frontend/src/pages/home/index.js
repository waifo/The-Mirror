import React from "react";
import styled, { css } from "styled-components";
import { Query } from "react-apollo";

import Spinner from "../../components/Spinner";
import {
  MainContentSection,
  SubContent,
  RecentPosts,
  EditorsChoice,
} from "../../components/Layout";
import { Colors, H3, Card, Icon, mediaQuery } from "../../components/Common";

import {
  GET_ALL_STORIES,
  GET_PRIMARY_AND_RECENT_STORIES,
} from "../../graphql/queries/stories";

const HomeContainer = styled.div`
  margin: 10px 0px;
`;
const MainSection = styled.div`
  padding: 10px;
  background-color: ${Colors.White};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1frsss;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  ${mediaQuery.mobile(css`
    grid-template-columns: 1fr;
  `)}
`;

// const SubContentContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-gap: 10px;
// `;
const RecentStoriesContainer = styled.div``;
// const SocialMediaContainer = styled.div``;

// const SocialPluginHeading = styled(H3)`
//   text-align: center;
//   background-color: ${Colors.ShadowedSteelGrey};
//   color: ${Colors.White};
//   line-height: 45px;
// `;

// const SocialPluginContainer = styled.div`
//   background-color: ${Colors.SwedishLightGrey};
//   padding: 20px;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-gap: 10px;
// `;
// const CardContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 10px;
// `;

// const AdContainer = styled.div`
//   background-color: ${Colors.SwedishLightGrey};
//   width: 100%;
//   height: 300px;
// `;

// const YoutubeContainer = styled.div`
//   background-color: ${Colors.SwedishLightGrey};
//   width: 100%;
//   height: 232px;
// `;
const Home = () => (
  <Query query={GET_PRIMARY_AND_RECENT_STORIES}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      if (error) return console.log("Error", error);
      return (
        <HomeContainer>
          <MainSection>
            {data.primaryStories.map((story) => (
              <MainContentSection key={story.createdAt} story={story} />
            ))}
          </MainSection>
          <EditorsChoice />
          <RecentStoriesContainer>
            <RecentPosts />
          </RecentStoriesContainer>
          {/* <SubContentContainer> */}
          {/* 
            <SocialMediaContainer>
              <SocialPluginHeading>Social Plugin</SocialPluginHeading>

              <SocialPluginContainer>
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
            </SocialMediaContainer> */}
          {/* </SubContentContainer> */}
        </HomeContainer>
      );
    }}
  </Query>
);

export default Home;
