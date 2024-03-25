const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Pinterest');

const postSchema = new mongoose.Schema({
    imageText: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Array,
        default: [],
    }
});

const plm = require('passport-local-mongoose');

module.exports = mongoose.model('Post', postSchema);