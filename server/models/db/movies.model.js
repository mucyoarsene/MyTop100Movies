import mongoose from "mongoose";

const moviesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    names: String,
    genre: String,
    budget: String,
    time: String,
    ranking: Number,
});

const MovieModel = mongoose.model('movies', moviesSchema);

export default MovieModel;
