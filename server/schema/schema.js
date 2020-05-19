const {GraphQLSchema} = require('graphql')

const  RootQuery  = require('./root_query_type')
const Mutation = require('./mutatuions')

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})