import { useState } from "react";
import ThemeContext from "./createContext";
import MainContext from "./MainContext";
import Middle from "./Middle";

type Theme = 'light' | 'dark';
export default function DarkOrLight(){
    const [theme, setTheme]=useState<Theme>('light');
    const toggleTheme = (): void =>{
        setTheme((prev)=> (prev === 'light'?'dark' : 'light'));
    };
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Middle/>
            </ThemeContext.Provider>
    )

}