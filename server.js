import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})