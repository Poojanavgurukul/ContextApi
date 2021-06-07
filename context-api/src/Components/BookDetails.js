import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookDetails = ({book}) => {
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {dispatch} = useContext(BookContext);
    return ( 
        <li style={{background:theme.ui}} onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
            <div>{book.title}</div>
            <div>{book.author}</div>
        </li>
     );
}
 
export default BookDetails;