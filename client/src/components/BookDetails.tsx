import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetails: React.FC = () => {
    const { bookName } = useParams<{bookName: string}>()
    const [book, setBook] = useState<{name: String; author: string; pages: number } | null>(null)

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`/api/book/${bookName}`)
                const data = await response.json()
                setBook(data)
            } catch(error: any) {
                console.error(`Error fetching book, ${error.message}`)
            }
        }
        fetchBook()
    }, [bookName])

    if(!book) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>{book.name}</h1>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
        </div>
    )
}

export default BookDetails