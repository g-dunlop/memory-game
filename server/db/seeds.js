use highScores;
db.dropDatabase();

db.highScores.insertMany([
    {
        username: "Graeme",
        highScore: "10"
    }
])