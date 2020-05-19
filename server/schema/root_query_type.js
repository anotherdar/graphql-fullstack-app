const {GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID} = require('graphql')

const  SongType  = require('./song_type')
const  LyricType  = require('./lyric_type')

const { Lyric } = require('../models/lyric')
const { Song } = require('../models/song')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        songs: {
            type: new GraphQLList(SongType),
            async resolve () {
                return await Song.find({})
            }
        },
        song: {
            type: SongType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve(parentsValue, {id}) {
                return Song.findById(id)
            }
        },
        lyrics:{
            type: new GraphQLList(LyricType),
            async resolve(parentValue, args) {
                return await Lyric.find({})
            }
        },
        lyric: {
            type: LyricType,
            args: {id: {type: new GraphQLNonNull(GraphQLID)}},
            async resolve(parentsValue, { id }) {
                return await Lyric.findById(id)
            }
        }
    })
})

module.exports = RootQuery
