const express = require('express');
const app = express();
const port = 3000;

app.get('/questions', (req,res) => {
    res.send("ALL QUESTIONS FROM DATABASE");
});

app.post('/question', (req,res) => {
    res.send("QUESTION POSTED");
});

app.listen(process.env.PORT || port, () => {
    console.log(`Quiz-App listening at http://localhost:${port}`);
});