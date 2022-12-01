const MyTopMovies = req => {
    const movie = {
        name: req.body.name,
        genre: req.body.genre,
        budget: req.body.budget,
        time: req.body.time,
        ranking: req.body.ranking,
    }
    return movie;
}

export default { MyTopMovies };