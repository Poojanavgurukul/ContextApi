import { createContext,useReducer, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { bookReducer } from '../reducers/bookReducers';

export const BookContext = createContext();
const BookContextProvider = (props) => {
    let history = useHistory();
    const [books,dispatch] =  useReducer(bookReducer,[
        // {title:'name of the wind',author:'patrick rothfuss',id:1},
        // {title:'the way of kings',author:'brandon sanderson',id:2},
    ],()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData):[]
    })
    // const addBook = (title,author) =>{
    //     setBooks([...books,{title,author,id:uuid()}]);
    // }
    // const removeBook = (id) =>{
    //     setBooks(books.filter(book => book.id !== id));
    // }
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books])
    // const url='https://jsonplaceholder.typicode.com/posts';
    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setPost(data))
    // },[url])
    return ( 
        <BookContext.Provider value={{books,dispatch,history}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;