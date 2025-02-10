import mongoose, { Schema, Document, model } from 'mongoose'


interface IBook extends Document {
    name: string,
    author: string,
    pages: number,
}

const bookSchema: Schema = new Schema({
    author: {type: String, required: true},
    name: {type: String, required: true},
    pages: {type: Number, required: true}
})

export const Book = model('Book', bookSchema, 'books')