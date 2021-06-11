import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <button onClick={toggleTheme}>Toggle The Theme</button>
            <Link to='/add'>
            <button>addBook</button>
            </Link>
        </div>
    );
}
 
export default ThemeToggle;