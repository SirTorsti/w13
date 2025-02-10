import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookForm: React.FC = () => {
const [book, setBook] = useState({
    name: '',
    author: '',
    pages: ''
  })
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setBook({
      ...book,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
        const response = await fetch('/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        const data = await response.json()
        console.log(data)
        navigate(`/book/${encodeURIComponent(data.name)}`)
    } catch (error: any) {
        console.error(`Error while creating book: ${error.message}`)
    }
  }


  return (
    
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Book name: </label>
            <input type="text" id="name" name="name" value={book.name} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="author">Author: </label>
            <input type="text" id="author" name='author' value={book.author} onChange={handleChange} required />
        </div>
        <div>
            <label htmlFor="pages">Pages: </label>
            <input type="number" id="pages" name="pages" value={book.pages} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}
  export default BookForm
