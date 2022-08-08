import express from 'express';
import cors from 'cors';
import { addBook, alterBook, findBookById, findBookByTitle } from './src/service/BookPrismaService';
import { Book } from './src/dtos/book';
import bodyParser from 'body-parser';

const port = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.get('/id/:id', async (req, res) => {
    
    const id = Number(req.params.id);
    res.json(
        await findBookById(id)
    )
})

app.get('/title/:id',async (req, res) => {

    const id = req.params.id;

    res.json(
        await findBookByTitle(id)
    )
})

app.post('/',async (req, res) => {
    
    const book = req.body as Book
    res.json(
        await addBook(book)
    )
})

app.put('/',async (req, res) => {
    const book = req.body as Book
    res.json(
        await alterBook(book)
    )
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})