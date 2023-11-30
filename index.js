import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//server setup
const server = new ApolloServer({
//typeDefs
//resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 400 }
})

console.log('Server ready at port', 400)