import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//db
import _db from "./_db.js";

//types
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        games() {
            return _db.games
        },
        authors() {
            return  _db.authors
        },
        reviews() {
            return _db.reviews
        },
        review(_, args) {
            return _db.reviews.find((review) => review.id === args.id)
        }
    }
}

//server setup
const server = new ApolloServer({
typeDefs,
resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 400 }
})

console.log(`Server ready at: ${url}`)