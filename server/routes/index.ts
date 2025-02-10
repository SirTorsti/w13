import {Request, Response, Router} from "express"
import { Book } from "../models/Book"


const router: Router = Router()



router.post('/api/book', async (req: Request, res: Response) => {
    try {
        const book = new Book(req.body)
        await book.save()
        res.json(book)
    } catch (error: any) {
        console.error(`Error while creating book: ${error.message}`)
        res.status(500).json({message: 'Internal server error'})
    }
})

router.get('/api/book/:name', async (req: Request, res: Response) => {
    try {
        const book = await Book.findOne({name: req.params.name})
        if(!book) {
            res.status(404).json({message: 'Book not found'})
        }
    } catch (error: any) {
        console.error(`Error while fetching book: ${error.message}`)
        res.status(500).json({message: 'Internal server error'
        })
    }
})

export default router