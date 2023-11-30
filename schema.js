export const typeDefs = `#graphql 
    type Game {
        id: ID!
        title: String!
        platform: [String!]! #array of string
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query { #not optional - entry points for users
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        authors: [Author]
    }
`;

// types: int, float, string, boolean, ID
// ! Defines a field as required
