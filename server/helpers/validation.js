import joi from "joi";

const moviesValidations = (movie) => {
    const schema = joi.object().keys({
        name: joi.string().required(),
        genre: joi.string().required(),
        budget: joi.string().required(),
        time: joi.string().required(),
        ranking: joi.number().required(),
    })

    return schema.validate(movie);
}

export default {moviesValidations};