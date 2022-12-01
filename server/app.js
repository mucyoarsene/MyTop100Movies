import express from 'express';
import bodyParser from 'body-parser';
import mongoConnect from './config/config';
import routes from './routes/movies.route';


const app = express();

const port = process.env.PORT || 5500;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome on MyTop100Movies api",
        status: 200
    })
})

app.use((req, res) => {
    res.status(404).json({
        message: "Endpoint not found",
        status: 404
    })
})

app.listen(port, console.log(`This MyTop100movies server is running on http://localhost:${port} `));
mongoConnect();

export default app;
