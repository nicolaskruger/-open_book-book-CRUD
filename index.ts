import express from 'express';
import cors from 'cors';
import { addBook, alterBook, findBookById, findBookByTitle } from './src/service/BookService';
import { Book } from './src/dtos/book';
import bodyParser from 'body-parser';

const port = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.get('/id/:id', (req, res) => {
    
    const id = req.params.id;
    res.json(
        findBookById(id)
    )
})

app.get('/title/:id', (req, res) => {

    const id = req.params.id;

    res.json(
        findBookByTitle(id)
    )
})

app.post('/', (req, res) => {
    
    const book = req.body as Book
    res.json(
        addBook(book)
    )
})

app.put('/', (req, res) => {
    const book = req.body as Book
    res.json(
        alterBook(book)
    )
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})