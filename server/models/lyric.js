const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LyricSchema = new Schema({
    song: {
        type: Schema.Types.ObjectId,
        ref: 'Song'
    },
    likes: {
        type: Number, 
        default: 0
    },
    content: {
        type: String
    }
}, {timestamps: true, toObject: {virtuals: true}})

LyricSchema.virtual('Songs', {
    ref: 'Song',
    localField: '_id',
    foreignField: 'Lyric'
})

const Lyric = mongoose.model('Lyric', LyricSchema)

module.exports = {
    Lyric
}