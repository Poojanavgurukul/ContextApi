import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const NavBar =()=> {
    const {isAuthenticated,toggleAuth} = useContext(AuthContext);
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const theme = isLightTheme ? light :dark;
    return(
        <nav style={{background:theme.ui,color:theme.syntax}}>
        <h1>Context App</h1>
        <p>Currently you have {books.length} books to get through.....</p>
        <div onClick={toggleAuth}>
            {isAuthenticated ? 'Logged In' : 'Logged out'}
        </div>
        <ul>
            <li>
            <ThemeToggle />
            </li>
        </ul>
    </nav>
    );
}
 
export default NavBar;