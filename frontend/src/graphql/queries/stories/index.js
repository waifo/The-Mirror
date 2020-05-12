import gql from "graphql-tag";

export const GET_ALL_STORIES = gql`
  {
    allStories {
      category
    }
  }
`;

export const GET_PRIMARY_STORIES = gql`
  {
    primaryStories {
      category
      shortDesc
      createdBy
      thumbnail
      createdAt
    }
  }
`;

export const GET_PRIMARY_AND_RECENT_STORIES = gql`
  {
    primaryStories {
      category
      shortDesc
      createdBy
      thumbnail
      createdAt
    }
    recentStories {
      category
      shortDesc
      createdBy
      thumbnail
      createdAt
    }
  }
`;

export const GET_PAGINATED_STORIES = gql`
  query getPaginatedStories($first: Int!, $after: ID) {
    stories(first: $first, after: $after) {
      edges {
        node {
          category
          shortDesc
          thumbnail
          createdAt
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
