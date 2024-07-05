import React from "react";
import Getuser from "./axious/Getuser";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Adduser from "./axious/Adduser";
import Updateuser from "./axious/Updateuser";
const App=() =>{
    return(
         <>
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<Getuser/>}/>
            <Route path="/add" element={<Adduser/>}/>
            <Route path="/update/:id" element={<Updateuser/>}/>
         </Routes>
         </BrowserRouter>

        </>
    )
}
export default App