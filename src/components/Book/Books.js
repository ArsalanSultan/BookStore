import  { useEffect ,useState } from 'react'
import Book from './Book';
import "./Book.css"


const Books =() => {
  // Hooks 
  // useState , useEffect , 
  const [books, setBooks] = useState();
  //console.log("🚀 ~ file: Books.js ~ line 11 ~ Books ~ books", books)
  
  // fetchHandler().then((data) => setBooks(data.books));
const getData= async()=>{
  const response = await fetch('http://localhost:5000/books/').then(response =>response.json());
  setBooks(response.books);
  console.log("🚀 ~ file: Books.js ~ line 15 ~ getData ~ response", response)
}
  useEffect(()=>{
    getData()
  },[])


  return (
    <div>
      <ul>
        {books &&
        books.map((book,i) => (
          <li  key={i}>
           <Book book={book}/>
          </li>
        ))

        }
      </ul>
{/* {<pre>{JSON.stringify(books, null, 2)}</pre>} */}
       {/* <button onClick={()=>getData()}>Get Data</button>  */}
    </div>
  )
}

export default Books;
