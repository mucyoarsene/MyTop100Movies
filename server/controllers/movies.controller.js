import Mongoose from "mongoose";
import validation from "../helpers/validation";
import MovieModel from "../models/body/movies.model";
import Movie from "../models/db/movies.model";

export const addMovies = async (req, res) => {
    const { name, genre, budget, time, ranking } = req.body;
    const {error} = validation.moviesValidations(MovieModel.MyTopMovies(req));

    if (error) {
        return res.status(400).json({
            status: 400,
            message: error.details[0].message.replace(/"/g, '')
        });
    }

    const existed = await Movie.find({ names: name })
    if(existed.length > 0){
        return res.status(409).json({
            status: 409,
            message: "Movie already exists, try another"
        });
    }
    const movie = await Movie.create({
        _id: new Mongoose.Types.ObjectId(),
        names: name,
        genre: genre,
        budget: budget,
        time: time,
        ranking: ranking,
    });


    if(movie){
        return res.status(201).json({
            status: 201,
            message: "Movie added successfully."
        });
    }

}

export const movies = async (req, res) => {
    const movies = await Movie.find().sort({ ranking: 'desc' });
    return res.status(200).json({
        movies: movies,
    })
}

export const oneMovie = async (req, res) => {
    const { _id } = req.params;
    const oneMovie = await Movie.findById(_id);
    if(!oneMovie){
        return res.status(404).json({
            message: "No Movie found by this id",
        })
    }
    return res.status(200).json({
        movie: oneMovie,
    });
}

export const updateMovie = async (req, res) => {
    const { name, genre, budget, time, ranking } = req.body;
    const { _id } = req.params;

    
    const updated = await Movie.findByIdAndUpdate(_id, { names: name, genre, budget, time, ranking });
    if(!updated){
        return res.status(404).json({
            message: "No Movie found by this id",
        })
    }
    if(updated){
        return res.status(201).json({
            message: "Movie Updated",
        })
    }
}
