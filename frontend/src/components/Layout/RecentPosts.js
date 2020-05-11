import React, { useRef, useCallback } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import { Colors, H3, Card } from "../Common";
import Spinner from "../Spinner";
import { GET_PAGINATED_STORIES } from "../../graphql/queries/stories";

const RecentPostContainer = styled.div``;
const ContentHeading = styled(H3)`
  text-align: left;
  background-color: ${Colors.ShadowedSteelGrey};
  color: ${Colors.White};
  line-height: 45px;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const CardElement = styled.div``;

export const RecentPosts = () => {
  const { loading, data, error, fetchMore } = useQuery(GET_PAGINATED_STORIES, {
    variables: { first: 10, after: "0" },
  });
  const observer = useRef();

  let lastStoryRef = useCallback(
    (node) => {
      if (loading) return <div>Loading...</div>;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data.stories.pageInfo.hasNextPage) {
          const { endCursor } = data.stories.pageInfo;
          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              fetchMoreResult.stories.edges = [
                ...prevResult.stories.edges,
                ...fetchMoreResult.stories.edges,
              ];
              return fetchMoreResult;
            },
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [data]
  );

  if (loading) return <Spinner />;
  if (error) return <div>Error</div>;
  return (
    <RecentPostContainer>
      <ContentHeading>Recent Posts</ContentHeading>
      <CardContainer>
        {data.stories.edges.map((story, index) => {
          if (index === data.stories.edges.length - 1)
            return (
              <CardElement key={story.node.createdAt} ref={lastStoryRef}>
                <Card content={story.node} />
              </CardElement>
            );
          else
            return (
              <CardElement key={story.node.createdAt}>
                <Card content={story.node} />
              </CardElement>
            );
        })}
      </CardContainer>
    </RecentPostContainer>
  );
};
