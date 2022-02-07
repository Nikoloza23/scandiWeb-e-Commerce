import React  from 'react';
import Navbar from '../src/components/home/Navbar';
import { useQuery } from '@apollo/client';
import { getAllCharacters } from '../src/components/pages/Queries'
import Card from './components/pages/Card';



function App() { 
   const {loading, error, data} = useQuery(getAllCharacters);

   if (loading){
     return <p>Loading...</p>
   }

   if (error){
    return <p>Error...{error.message}</p>
  }
   return (
     <>
     <header>
     <h1 className="text-center m-5">ALL</h1>
     </header>
     <div className="row">
       {data.category.products.map(products => 
         <Card  products={products} key={products.id}/>
        )}
     </div>
     </>
   )
   
}

export default App;

