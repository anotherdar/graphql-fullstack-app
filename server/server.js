const express = require('express')
const expressGraphQL = require('express-graphql')
require('./db/mongoose')

const schema = require('./schema/schema')


const app = express()


app.use(express.json())
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

const {Lyric} = require('./models/lyric')


module.exports = {
    app
}