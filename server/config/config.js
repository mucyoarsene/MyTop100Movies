import mongoose from "mongoose";

let DB_CONNECTION;

if(process.env.NODE_ENV === 'isTesting'){
    DB_CONNECTION= 'mongodb://127.0.0.1:27017/moviesTest'
}else{
    DB_CONNECTION= 'mongodb://127.0.0.1:27017/movies'
}


const mongoConnect = () => {
    mongoose.connect(DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })

    mongoose.connection
    .once('open', () => console.log('Database connected successfully'))
    .on('error', (error) => {
        console.log('Error', error);
    })
}

export default mongoConnect;