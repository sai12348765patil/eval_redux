import { Route, Routes } from "react-router"
import {Home} from "./componants/home"
import {SearchPage} from "./componants/searchpage"
import {Pageid} from "./componants/pageid"


function App() {
return (
  <div>
  
    <Routes> 
      <Route path="/" element={<Home/>}></Route>
      <Route path="/search" element={<SearchPage/>} ></Route>
      <Route path="/search/:id" element={<Pageid/>} ></Route>
     </Routes>
  </div>
)
}

export default App
