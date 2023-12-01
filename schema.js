export const typeDefs = `#graphql 
    type Game {
        id: ID!
        title: String!
        platform: [String!]! #array of string
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query { #not optional - entry points for users
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: AddGameInput!): Game
        updateGame(id: ID!, edits:EditGameInput!): Game

    }
    input AddGameInput {
        title: String!
        platform:[String!]!
    }
    input EditGameInput {
        title: String
        platform:[String!]
    }
`;

// types: int, float, string, boolean, ID
// ! Defines a field as required
