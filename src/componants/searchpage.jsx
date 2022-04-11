import { useEffect, useState } from "react"
import axios from "axios";
import "./searchpage.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sort_a_b } from "../store/actioncreatore";
import { Link } from "react-router-dom";


export const SearchPage = ()=>{
    let [data,setdata] = useState([]);
    const [text,settext] = useState("");

    // const sai = useSelector((store)=>store.data);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get("https://fast-reef-22226.herokuapp.com/data").then(({ data }) => {setdata(data)})
    },[])

 function sortatob() {
        data = data.sort((a,b)=>{
            var namea = a.title;
            var nameb = b.title;
            if(namea<nameb) {
                return -1;
            }
            if(namea>nameb){
               return 1;
            }
            return 0;
        });
        setdata(data);
    console.log("sai")
     }

    // console.log(data);
    return (
        <div>
            <div id="navbar">
                <h1>GOOGLE</h1>
                <input placeholder="search" />
                <button className="search">Search</button>
            </div>
                <hr/>
                <br/>
                <div id="button">
                    <button className="search" onClick={sortatob}>Sort A-Z</button>

                    <button className="search" >Sort Z-A</button>
                    <button className="search">Sort by Date(asc)</button>
                    <button className="search">Sort by date (desc)</button>
                    <button className="search"> Sort by quality (asc)</button>
                    <button className="search"> Sort by quality(desc)</button>
                </div>
                <hr/>
                <br/>
                {
                    data.map((e)=>{
                        return <div key={e.id} id="search-result">
                            <p>{e.url}</p>
                            <div id="author"><h3 id="h3" ><Link to={`/search/${e.id}`}>{e.title}</Link></h3>  <h3>{e.author}</h3></div>
                            <p>{e.description}</p>
                            <h4>Craetion date : {e.creation_date}</h4>
                            <div id="explicit"><h4>Explicit : {e.explicit}</h4>  <h4> Quality % : {e.quality}</h4></div>
                            <br/>
                            <hr/>
                            <br/>
                        </div>
                    })
                }
            
        </div>
    )
}