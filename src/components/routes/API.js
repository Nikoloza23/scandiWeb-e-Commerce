import React from 'react'
import { fetchedData } from '../routes/list/fetchedData'

const Api = ({products}) =>{
    return (
        <div className="images" >
       <img src={`${fetchedData[0].data.category.products[0].gallery[1] + '?q=' + fetchedData[0].data.category.products[0].id}`} alt='/'/>
       <img src={`${fetchedData[0].data.category.products[0].gallery[2]}`} alt='/'/>
       <img src={`${fetchedData[0].data.category.products[0].gallery[3]}`} alt='/'/>
       <img src={`${fetchedData[0].data.category.products[0].gallery[4]}`} alt='/'/>
       </div>
    )
}

 export default Api;

