import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    image: String,
    topic: String,
    title: String,
    handle: String,
    likes: Number,
    dislikes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;
