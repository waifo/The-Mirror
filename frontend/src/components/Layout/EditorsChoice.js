import React from "react";
import styled, { css } from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import {
  ContentHeading,
  ContentHeadingLight,
  Image,
  Colors,
  mediaQuery,
} from "../Common";
import { GET_PRIMARY_STORIES } from "../../graphql/queries/stories";
import Spinner from "../Spinner";

const EditorsChoiceContainer = styled.div``;
const EditorsChoiceCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  background-color: ${Colors.SwedishLightGrey};
`;
const CardContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px 10px;
  ${mediaQuery.mobile(css`
    grid-template-columns: 1fr;
  `)}
`;
const Contents = styled.div``;
const Meta = styled.div``;

export const EditorsChoice = () => {
  const { loading, data, error } = useQuery(GET_PRIMARY_STORIES);
  if (loading) return <Spinner />;
  if (error) return <div>Error</div>;
  return (
    <EditorsChoiceContainer>
      <ContentHeading>Editors Choice</ContentHeading>
      <CardContainer>
        {data.primaryStories.map((story) => (
          <EditorsChoiceCard>
            <Image src={story.thumbnail} />
            <Contents>
              <ContentHeadingLight>{story.shortDesc}</ContentHeadingLight>

              <Meta class="post-meta">
                <span>
                  Jun 14 <span>•</span> 3 min read <span></span>
                </span>
              </Meta>
            </Contents>
          </EditorsChoiceCard>
        ))}
      </CardContainer>
    </EditorsChoiceContainer>
  );
};
