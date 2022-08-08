
import { PrismaClient } from "@prisma/client"
import { Book } from "../dtos/book"

const prisma = new PrismaClient();

const addBook = async (book: Book) => {
    await prisma.book.create({
        data: {
            title: book.title
        }
    })
}
const findBookByTitle = async (title: string) => {
    return await prisma.book.findFirst({
        where: {
            title: title
        }
    })
}
const findBookById = async (id: number) => {
    return await prisma.book.findFirst({
        where: {
            id: id
        }
    })
}
const alterBook = async (book: Book) => {
    await prisma.book.update({
        data: {
            title: book.title
        },
        where: {
            id: book.id
        }
    })
}

export {
    addBook,
    findBookByTitle,
    alterBook,
    findBookById
}