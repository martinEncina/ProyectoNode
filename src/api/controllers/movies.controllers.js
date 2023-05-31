const Movie = require("../models/movie.models")

const getMovies = async(req, res) => {
    try {
        const allMovies = await Movie.find()
        return res.status(200).json(allMovies)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}
const getMovieById = async(req, res) => {
    const id = req.params.id
    try {
        const movieById = await Movie.findById(id)
        return res.status(200).json(movieById)
    } catch (error) {
        return res.status(500).json(error)
    }
}
const postMovie = async (req,res) => {
    try {
    //    console.log(req.body); 
        const newMovie = new Movie(req.body)
        const createdMovie = await newMovie.save()
        return res.status(201).json(createdMovie)
    } catch (error) {
        return res.status(500).json(error)
    }
}
const deleteMovie = async (req,res) => {
    const {id} = req.params;
    try {
        const deleteMovie = await Movie.findByIdAndDelete(id);
        if(!deleteMovie){
            return res.status(404).json({mensaje: "no coincide el id"})
        }
        return res.status(200).json(deleteMovie)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getMovies,getMovieById,postMovie,deleteMovie}