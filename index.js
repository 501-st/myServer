require('dotenv').config();
const express = require('express');
const corsMiddleware = require('./middleware')
const apiRouter = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use("/api", apiRouter);

app.use('*', (req, res) => {
    res.status(404).send("Not Found 4004");
})

app.listen(PORT, () => {
    console.log('Server started on port', PORT)
});