const Story = `
    type Story{
        _id:ID!
        category: String,
    shortDesc: String,
    fullStory: String,
    createdBy: String,
    createdAt: String,
    thumbnail: String,
    isPrimary: Boolean
    }

    type PageInfo{
        endCursor:ID!
        hasNextPage:Boolean!
    }

    type StoryEdge{
        cursor:ID!
        node:Story!
    }

    type StoryConnection{
        edges:[StoryEdge]
        pageInfo:PageInfo
    }


    extend type Query{
        allStories:[Story]
        primaryStories:[Story]
        editorStories:[Story]
        recentStories:[Story]
        stories(first:Int!,after:ID):StoryConnection
    }

`;

export default Story;
