import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BookForm from './components/BookForm'
import BookDetails from './components/BookDetails'

function App() {


  return (
    <>
    <BrowserRouter>
      <div>
        <h1>books</h1>
        <BookForm />
        <Routes>
          <Route path="/" element={<BookForm />} />
          <Route path="/book/:bookName" element={<BookDetails />} />
          <Route path="*" element={
            <div>
              <h1>404</h1>
              <p>This is not the webpage you are looking for.</p>
            </div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
