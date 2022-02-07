import { useQuery } from '@apollo/client';
import { getAllCharacters } from '../../pages/data/Queries'
import Card from '../src/components/card/Card'

function Data(){
const {loading, error, data} = useQuery(getAllCharacters);

  if (loading){
    return <p>Loading...</p>
  }

  if (error){
   return <p>Error...{error.message}</p>
 }
  return (
    <>
    <div className="row">
      {data.category.products.map(products => 
        <Card  products={products} key={products.id}/>
       )}
    </div>
    </>
  )
}

export default Data;