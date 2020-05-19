const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {Lyric} = require('./lyric')

const SongSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lyrics: [{
        type: Schema.Types.ObjectId,
        ref: 'Lyric'
    }]
}, {timestamps: true, toObject: {
    virtuals: true
}})

SongSchema.virtual('Lyrics', {
    ref: 'Lyric',
    localField: '_id',
    foreignField: 'lyrics'
})

SongSchema.pre('remove', async function(next) {
    const song = this
    const Lyric = mongoose.model('Lyric')

    await Lyric.deleteMany({song: song._id})

    next()
})

const Song = mongoose.model('Song', SongSchema)

module.exports = {
    Song
}