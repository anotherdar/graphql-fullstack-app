const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = require('graphql')

const {Song} = require('../models/song')
const {Lyric} = require('../models/lyric')

const SongType = require('./song_type')
const LyricType = require('./lyric_type')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addSong: {
            type: SongType,
            args: {
                title: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            async resolve(parentValue, {title}) {
                const song = new Song({title})
                await song.save()
                return song
            }
        },
        addLyricToASong: {
            type: SongType,
            args: {
                songId: {
                    type: new GraphQLNonNull(GraphQLID)
                },
                content: { 
                    type: new GraphQLNonNull(GraphQLString)
                },
            },
            async resolve(parentValue, {content, songId}) {
                const song = await Song.findById(songId)
                if(!song) return new Error('Song not found')

                const lyric = new Lyric({content, song})
                await lyric.save()
                
                song.lyrics.push(lyric)
                
                await song.save()

                return song
            }
        },
        likeLyric: {
            type: LyricType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            async resolve (parentValue, { id }) {
                const lyric = await Lyric.findById(id)
                if(!lyric) return 

                lyric.likes++

                await lyric.save()

                return lyric
            }
        },
        deleteSong: {
            type: SongType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve(parentValue, {id}) {
                return Song.findOneAndDelete({_id: id})
            }
        }
    })
})

module.exports = mutation