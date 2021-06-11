import { useContext, useEffect,useState } from "react";
import { useLocation } from "react-router";
import { BookContext } from "../contexts/BookContext";

const EditBook = () => {
    const {books,dispatch,history} = useContext(BookContext);
    // const [title,setTitle] = useState('');
    // const [author,setAuthor] = useState('');
    const location = useLocation();
    const [selectedBook,setSelectedBook] = useState({
        title:'',
        author:''
    })
    const currenBookId = location.state.id
    useEffect(()=>{
        const bookId=currenBookId;
        const selectedBook = books.find(book=>book.id === bookId)
        setSelectedBook(selectedBook)
    },[currenBookId,books])
    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:'EDIT_BOOK', selectedBook});   
        history.push('/')
    }
    const onHandleChandle=(e)=>{
        setSelectedBook(e.target.name)
    }
    return ( 
        <div>
        <form onSubmit={onSubmit}>
            <label>Title</label>
            <input 
            type="text"
            name="title"
            required
            value={selectedBook.title}
            onChange={onHandleChandle}
            />
            <label>Author</label>
            <input
            type="text"
            name="author"
            required
            value={selectedBook.author}
            onChange={onHandleChandle}
            />
            <button>Update</button>
        </form>
        </div>
     );
}
 
export default EditBook;