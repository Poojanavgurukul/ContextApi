import BookDetails from './BookDetails';

import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList =()=> {
        const {isLightTheme,light,dark} = useContext(ThemeContext);
        const {books} = useContext(BookContext);
        const theme = isLightTheme ? light : dark;

        return books.length?( 
            <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
                <ul>
                    {books.map((book,index)=>(
                        <BookDetails key={index} book={book} />
                    ))} 
                </ul>
            </div>
         ):(
             <div className="empty">No Books to read. Hello free time :)</div>
         )
}
 
export default BookList;