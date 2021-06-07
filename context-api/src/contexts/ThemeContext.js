import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider =(props)=>{
    const [ isLightTheme,setIsLightTheme] = useState(true);
    const themes = { 
        light:{syntax:'#555',ui:'#ddd',bg:'#eee'},
        dark:{syntax:'#ddd',ui:'#333',bg:'#555'}
     }
    
    const toggleTheme = () =>{
        setIsLightTheme(!isLightTheme)
    } 
    return ( 
        <ThemeContext.Provider value={{...themes,isLightTheme,toggleTheme:toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;