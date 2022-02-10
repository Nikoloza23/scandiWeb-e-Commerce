import ProductsList from './ProductItem'
import { fetchedData } from '../routes/list/fetchedData'

 const Api = () => {
     const data = fetchedData[0].data.category.products;
     return (
        <div>
            <ProductsList data={data} />
       </div>
    
)
}

 export default Api;