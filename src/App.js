import './App.css';
import Counter from "./Counter";
import CounterHook from "./CounterHook";
import React, { useState } from 'react';


export const ThemeContext = React.createContext();
function App() {
    const [theme, setTheme] = useState('red');
    return <>
        <ThemeContext.Provider value={{ backgroundColor: theme }}>

            <Counter initialState={0}></Counter>
            <CounterHook initial={12} />
            <button onClick={() => {
                setTheme(pre => {
                    return pre === 'red' ? 'blue' : 'red';
                })
            }}>ToggleTheme</button>
        </ThemeContext.Provider>
    </>;
}

export default App;