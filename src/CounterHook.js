import React,{useState,useContext} from 'react'
import { ThemeContext } from "./App";

export default function CounterHook(props) {
    const [count, setCount] = useState(props.initial);
    const style = useContext(ThemeContext);
    const changeState= (amout)=>{
            setCount( pre=> pre+amout);
    }
    return (
        <>
            <div>CounterHook</div>
            <button style={style} onClick={()=>changeState(-1)} >-</button>
            <span>{count}</span>
            <button style={style} onClick={()=>changeState(1)} >+</button>
            
        </>
    )
}
