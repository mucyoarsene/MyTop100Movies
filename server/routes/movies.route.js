import express from "express";
import { addMovies, movies, oneMovie, updateMovie } from "../controllers/movies.controller";


const routes = express();

routes.post('/movie', addMovies);
routes.get('/movies', movies);
routes.get('/movie/:_id', oneMovie);
routes.patch('/movie/:_id', updateMovie); 

export default routes;
