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

    extend type Query{
        getAllStories:[Story]
        getPrimaryStories:[Story]
    }

`;

export default Story;
