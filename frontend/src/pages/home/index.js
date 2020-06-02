import React from "react";
import styled, { css } from "styled-components";
import { Query } from "react-apollo";

import Spinner from "../../components/Spinner";
import Adsense from "../../components/Adsense";
import {
  MainContentSection,
  SubContent,
  RecentPosts,
  EditorsChoice,
} from "../../components/Layout";
import {
  Colors,
  H3,
  Card,
  Icon,
  mediaQuery,
  FacebookIcon,
  TwitterIcon,
  Shimmer,
} from "../../components/Common";

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

const ShimmerCss = css`
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
`;

const RecentStoriesContainer = styled.div``;

const Home = () => (
  <Query query={GET_PRIMARY_AND_RECENT_STORIES}>
    {({ loading, error, data }) => {
      // if (loading) return <ShimmerContainer />;
      if (error) return console.log("Error", error);
      return (
        <HomeContainer>
          <MainSection>
            {loading ? (
              <Shimmer css={ShimmerCss} height="300px" count={5} />
            ) : (
              data.primaryStories.map((story) => (
                <MainContentSection key={story.createdAt} story={story} />
              ))
            )}
          </MainSection>
          <EditorsChoice />
          <RecentStoriesContainer>
            <RecentPosts />
          </RecentStoriesContainer>

          {/* <Adsense /> */}
        </HomeContainer>
      );
    }}
  </Query>
);

export default Home;
