const graphql = require('graphql')

const LyricType = require('./lyric_type')
const {Song}  = require('../models/song')

const SongType = new graphql.GraphQLObjectType({
    name: "SongType",
    fields: () => ({
        id: {
            type: graphql.GraphQLID
        },
        title: {
            type: graphql.GraphQLString
        },
        lyrics: {
            type: new graphql.GraphQLList(LyricType),
            async resolve( parentValue, args) {
                const song = await Song.findById(parentValue._id)

                await song.populate('lyrics').execPopulate()
                 
                return song.lyrics
            }
        }
    })
})

module.exports = SongType