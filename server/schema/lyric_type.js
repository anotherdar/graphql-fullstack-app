const mongoose = require('mongoose')
const graphql = require('graphql')

const { Lyric } = require('../models/lyric')

const LyricType = new graphql.GraphQLObjectType({
    name: 'LyricType',
    fields: () => ({
        id: {
            type: graphql.GraphQLID
        },
        likes: {
            type: graphql.GraphQLInt
        },
        content: {
            type: graphql.GraphQLString
        },
        song: {
            type: require('./song_type'),
            async resolve(parentValue, arg) {
                const lyric = await Lyric.findById(parentValue._id)
                await lyric.populate('song').execPopulate()

                return lyric.song
            }
        }
    })
})

module.exports = LyricType