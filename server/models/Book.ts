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

const Book = mongoose.model<IBook>('Book', bookSchema)
export { Book, IBook}