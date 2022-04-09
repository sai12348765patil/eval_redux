import { useState } from "react"
import "./home.css"
import { useNavigate } from "react-router";

export const Home = ()=>{
    const navigate = useNavigate();
    const [text , settext] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
           navigate("/search")
        }
      }
  
    return (
        <div className="maindiv">
        <div className="google" >
            <h1 className="go">G</h1>
            <h1 className="oo">O</h1>
            <h1 className="gll">O</h1>
            <h1 className="go">G</h1>
            <h1 className="oo">L</h1>
            <h1 className="gll">E</h1>
        </div>
        <input className="search-box" placeholder="search here" onChange={((e)=>{
            settext(e.target.value);
            
        })}  onKeyDown={handleKeyDown} />
        </div>
    )
}