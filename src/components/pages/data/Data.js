import { useQuery } from '@apollo/client';
import Card from '../../card/Card';
import { getAllCharacters } from '../../pages/data/Queries'

function Data(){
const {loading, error, data} = useQuery(getAllCharacters);

  if (loading){
    return <p>Loading...</p>
  }

  if (error){
   return <p>Error...{error.message}</p>
 }
 console.log(data)
  return (
    <>
    <div className="row">
      {data.categories.map(categorie =>{
        return(
          categorie.products.map(products => 
            <Card  products={products} key={products.id}/>
          )
        )}
        )}
        </div>
    </>
  )
}

export default Data;


