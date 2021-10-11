/**
 * MONGODB CONNECTION
 */

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:C1W1K8Y3yfE2Prdg@quiz-app.54phe.mongodb.net/quiz-app?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * EXPRESS SERVER
 */

const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const cors = require('cors');
const questionRouter = express.Router();
const answerRouter = express.Router();

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

questionRouter.route('/questions')
    .get((req,res) => {
        const database = client.db("quiz-app");
        const questions = database.collection("questions");
        questions.find().toArray(function (err, docs) {
            console.log("Found the following documents");
            console.log(docs);
            res.json({message: "ALL QUESTIONS FROM DATABASE", docs});
        });
    })
    .post(async (req,res) => {
        try {
            const database = client.db("quiz-app");
            const questions = database.collection("questions");
            const result = await questions.insertOne(req.body);

            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.json({message: "QUESTION POSTED"});
        } catch (e) {
            console.error(e);
            res.json({message: "QUESTION POST FAILED"});
        }
    });

answerRouter.route('/answers')
    .get((req,res) => {
        const database = client.db("quiz-app");
        const answers = database.collection("answers");
        answers.find().toArray(function (err, docs) {
            console.log("Found the following documents");
            console.log(docs);
            res.json({message: "ALL ANSWERS FROM DATABASE", docs});
        });
    })
    .post(async (req,res) => {
        try {
            const database = client.db("quiz-app");
            const answers = database.collection("answers");
            const result = await answers.insertOne(req.body);

            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.json({message: "ANSWER POSTED"});
        } catch (e) {
            console.error(e);
            res.json({message: "ANSWER POST FAILED"});
        }
    });

app.use('/api', questionRouter);
app.use('/api', answerRouter);

app.listen(process.env.PORT || port, async () => {
    try {
        await client.connect();
    } catch(e) {
        console.error('CONNECTION ERROR: ' + e);
    }
    console.log(`Quiz-App listening at http://localhost:${port}`);
});