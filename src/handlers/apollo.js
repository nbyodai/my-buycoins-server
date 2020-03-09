const { ApolloServer } = require("apollo-server-cloudflare");
const {
  graphqlCloudflare
} = require("apollo-server-cloudflare/dist/cloudflareApollo");

const KVCache = require("../kv-cache");
const resolvers = require("../resolvers");
const CoindeskAPI = require('../datasources/coindeskapi')
const typeDefs = require("../schema");

const dataSources = () => ({
  coindeskAPI: new CoindeskAPI(),
});

const kvCache = { cache: new KVCache() };

const createServer = graphQLOptions =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    dataSources,
    ...(graphQLOptions.kvCache ? kvCache : {})
  });

const handler = (request, graphQLOptions) => {
  const server = createServer(graphQLOptions);
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(
    request
  );
};

module.exports = handler;
