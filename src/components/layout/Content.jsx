import React from "react";
import './Content.css'

import {Routes,Route} from "react-router-dom"

import Param from "../../views/examples/Param"
import Error404 from "../../views/examples/Error404"
import Home from "../../views/examples/Home"
import About from "../../views/examples/About"
import Dividir from "../../views/examples/Dividir"


const Content = props =>(
    <>
 <div className="Content">
 <Routes>
<Route path ="/about" element={<About/>}/>
<Route path ="/param/:id"element={<Param/>}/>
<Route path ="/" exact element={<Home/>}/>
<Route path ="*" element={<Error404/>}/>
<Route path ="/dividir" element={<Dividir/>}/>


 </Routes>
</div>
 </>
)
export default Content