const mongoose = require("mongoose");

const Movie = require("../api/models/movie.models");

const arrayMovies = [
    {
        title: 'The Matrix',
        director: 'Hermanas Wachowski',
        year: 1999,
        genre: 'Acción',
      },
      {
        title: 'The Matrix Reloaded',
        director: 'Hermanas Wachowski',
        year: 2003,
        genre: 'Acción',
      },
      {
        title: 'Buscando a Nemo',
        director: 'Andrew Stanton',
        year: 2003,
        genre: 'Animación',
      },
      {
        title: 'Buscando a Dory',
        director: 'Andrew Stanton',
        year: 2016,
        genre: 'Animación',
      },
      {
        title: 'Interestelar',
        director: 'Christopher Nolan',
        year: 2014,
        genre: 'Ciencia ficción',
      },
      {
        title: '50 primeras citas',
        director: 'Peter Segal',
        year: 2004,
        genre: 'Comedia romántica',
      },
    ];
mongoose.connect("mongodb+srv://root:root@cluster0.reac62r.mongodb.net/moviesDB?retryWrites=true&w=majority")
.then(async () => {
    const allPeliculas = await Movie.find();
    if(allPeliculas.length > 0) {
        await Movie.collection.drop();
        console.log("Peliculas borradas");
    };
})
.catch ((error) => console.log ("error borrado Peliculas", error))
.then(async () => {
    const movieMap = arrayMovies.map((movie) => new Movie(movie));
    await Movie.insertMany(movieMap),
    console.log("Peliculas insertadas");
})
.catch ((error) => console.log ("error insertando peliculas", error))
.finally(() => mongoose.disconnect())

