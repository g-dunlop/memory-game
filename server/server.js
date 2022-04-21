const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json())

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('./mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('highScores');
        const highScoresCollection = db.collection('highScores');
        const highScoresRouter = createRouter(highScoresCollection);
        app.use('/api/highScores', highScoresRouter);
    })
    .catch(console.err);

app.listen(5000, function () {
    console.log(`Listening on port ${this.address().port}`)
});