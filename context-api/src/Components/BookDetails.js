import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import {Link} from 'react-router-dom';

const BookDetails = ({book}) => {
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {dispatch} = useContext(BookContext);
    return ( 
        <li style={{background:theme.ui}} onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
            <div>{book.title}</div>
            <div>{book.author}</div>
            {book.id}
            <Link to={{pathname:`/edit/${book.id}`,
            state:{
                id:book.id
            }
            }}
            >
            <button>edit</button>
            </Link>
            <button onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>delete</button>
        </li>
     );
}
 
export default BookDetails;