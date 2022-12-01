import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import deleteAllDataInUsers from "../helpers/deleteAllDatas";

chai.should()
chai.use(chaiHttp);

describe('Testing the whole', () => {
    before('Delete all datas', () => deleteAllDataInUsers());

    it('Should welcome a user', done => {
        chai
            .request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object')
                res.body.should.have.property('message', 'Welcome on MyTop100Movies api');
                done();
            })
    });

    it('Should test 404 not found', done => {
        chai
            .request(app)
            .get('/ihsdfhsdjkfhsdk')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object')
                res.body.should.have.property('message', 'Endpoint not found');
                done();
            })
    });

    const movie = {
        name: "Black Panther",
        genre: "Action Movie",
        budget: "$253 M",
        time: "2h10",
        ranking: 7
      }

    it('Should add a movie', done => {
        chai
            .request(app)
            .post('/api/movie')
            .send(movie)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });
})
