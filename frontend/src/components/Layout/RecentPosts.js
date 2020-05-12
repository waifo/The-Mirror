import React, { useRef, useCallback } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled, { css } from "styled-components";

import { Button, Colors, ContentHeading, Card, mediaQuery } from "../Common";
import Spinner from "../Spinner";
import { GET_PAGINATED_STORIES } from "../../graphql/queries/stories";

const RecentPostContainer = styled.div``;

const CardContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  ${mediaQuery.mobile(css`
    grid-template-columns: 1fr;
  `)}
`;

const CardElement = styled.div``;

const ButtonContainer = styled.div`
  text-align: center;
`;

export const RecentPosts = () => {
  const { loading, data, error, fetchMore } = useQuery(GET_PAGINATED_STORIES, {
    variables: { first: 10, after: "0" },
  });
  //   const observer = useRef();

  const loadMore = () => {
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
  };

  // Code for infinite scroll

  //   let lastStoryRef = useCallback(
  //     (node) => {
  //       if (loading) return <div>Loading...</div>;
  //       if (observer.current) observer.current.disconnect();
  //       observer.current = new IntersectionObserver((entries) => {
  //         if (entries[0].isIntersecting && data.stories.pageInfo.hasNextPage) {
  //           const { endCursor } = data.stories.pageInfo;
  //           fetchMore({
  //             variables: { after: endCursor },
  //             updateQuery: (prevResult, { fetchMoreResult }) => {
  //               fetchMoreResult.stories.edges = [
  //                 ...prevResult.stories.edges,
  //                 ...fetchMoreResult.stories.edges,
  //               ];
  //               return fetchMoreResult;
  //             },
  //           });
  //         }
  //       });
  //       if (node) observer.current.observe(node);
  //     },
  //     [data]
  //   );

  if (loading) return <Spinner />;
  if (error) return <div>Error</div>;
  return (
    <RecentPostContainer>
      <ContentHeading>Recent Posts</ContentHeading>
      <CardContainer>
        {data.stories.edges.map((story, index) => {
          if (index === data.stories.edges.length - 1)
            return (
              //Element for Infinte scroll

              //   <CardElement key={story.node.createdAt} ref={lastStoryRef}>
              //     <Card content={story.node} />
              //   </CardElement>

              <CardElement key={story.node.createdAt}>
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
      <ButtonContainer>
        <Button onClick={loadMore}>More</Button>
      </ButtonContainer>
    </RecentPostContainer>
  );
};
