import React from "react";
import styled, { css } from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import { GET_STORY_BY_ID } from "../../graphql/queries/stories";
import { Image, H1, Colors, mediaQuery } from "../../components/Common";
import Spinner from "../../components/Spinner";
// import Adsense from "../../components/Adsense";

const StoryDetailContainer = styled.div``;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  ${mediaQuery.mobile(css`
    grid-template-columns: 0fr 1fr 0fr;
    padding: 0px;
  `)}
  padding: 30px 0px;
`;
const ImageCss = css`
  height: 50vh;
  ${mediaQuery.mobile(css`
    height: 40vh;
  `)}
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  ${mediaQuery.mobile(css`
    grid-template-columns: 0fr 1fr 0fr;
  `)}
`;
const Content = styled.div`
  color: ${Colors.ShadowedSteelGrey};
  padding: 10px;
`;
const StoryHeading = styled(H1)`
  text-align: center;
  ${mediaQuery.mobile(css`
    font-size: 28px;
  `)}
`;
const Story = styled.p`
  font-family: Titillium Web Extra Light;
  font-size: 18px;
  line-height: 36px;
  word-spacing: 5px;
`;

const StoryDetail = ({ match }) => {
  let { loading, data, error } = useQuery(GET_STORY_BY_ID, {
    variables: { ID: match.params.storyId },
  });
  if (loading) return <Spinner />;
  if (error) return <div>Error</div>;
  return (
    <StoryDetailContainer>
      <ImageContainer>
        <div></div>
        <Image customCss={ImageCss} src={data.storyById.thumbnail} />
        <div></div>
      </ImageContainer>
      <ContentContainer>
        <div />
        <Content>
          <StoryHeading>{data.storyById.shortDesc}</StoryHeading>
          <Story>{data.storyById.fullStory}</Story>
        </Content>
        <div />
      </ContentContainer>
    </StoryDetailContainer>
  );
};
export default StoryDetail;
