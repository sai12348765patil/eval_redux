import { useParams } from "react-router-dom"
import { useState , useEffect } from "react";

export const Pageid = ()=>{
    const {id} = useParams();
    const [me,setme] = useState([]);

    useEffect(()=>{
        fetch(`https://fast-reef-22226.herokuapp.com/data//${id}`)
       .then((x)=>x.json())
       .then(({data})=>setme(data));
           
       },[])
    return (
        <div>
            pageid
            <p>{me}</p>
        </div>
    )
}