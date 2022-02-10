import React from 'react'
// import Data from "../../helpers/data/Data"
// import Navbar from "./navbar/Navbar";
// import {useState} from 'react'
//Make Filtration 
// const Home = () =>{
//   const [categoryName, setCategoryName] = useState("all");
//    return(
//    <div className="home">
//      <Navbar setCategoryName={setCategoryName} />
//       <Data categoryName={categoryName} />
//    </div> 
//    )
// }

// export default Home;


import ProductsList from '../ProductsList/ProductsList'
import { fetchedData } from '../routes/list/fetchedData' 


const Home = () => {
    const data = fetchedData[0].data.category.products;
    return (
       <div>
           <ProductsList data={data} />
       </div>
    
    )
}

export default Home;