import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
    return ( 
        <ThemeContext.Consumer>{(context)=>{
         const {toggleTheme} = context
            return(
                <div>
                    <button onClick={toggleTheme}>Toggle The Theme</button>
                </div>
            )

            }
        }        
        </ThemeContext.Consumer>
     );
}
 
export default ThemeToggle;