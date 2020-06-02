import gql from "graphql-tag";

export const GET_ALL_STORIES = gql`
  {
    allStories {
      category
    }
  }
`;

export const GET_STORY_BY_ID = gql`
  query getStoryById($ID: String!) {
    storyById(ID: $ID) {
      category
      shortDesc
      fullStory
      createdBy
      thumbnail
      createdAt
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
export const GET_EDITOR_STORIES = gql`
  {
    editiorStories {
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
      _id
      category
      shortDesc
      createdBy
      thumbnail
      createdAt
    }
    recentStories {
      _id
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
          _id
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
