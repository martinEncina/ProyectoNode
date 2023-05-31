const express = require("express")
const {getMovies, getMovieById, postMovie,deleteMovie} = require("../controllers/movies.controllers")
const moviesRoutes = express.Router();

moviesRoutes.get("/", getMovies)
moviesRoutes.get("/id/:id", getMovieById)
moviesRoutes.post("/", postMovie)
moviesRoutes.delete("/:id", deleteMovie)

module.exports = moviesRoutes