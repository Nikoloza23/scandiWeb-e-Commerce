import Data from "../../../helpers/data/Data"
import {useState} from 'react'
import Navbar from "./Navbar";

//Make Filtration 
const NavbarFilter = () =>{
const [categoryName, setCategoryName] = useState("all");
    return(
    <div className="home">
      <Navbar setCategoryName={setCategoryName} />
       <Data categoryName={categoryName} />
    </div> 
    )
 }

export default NavbarFilter;
