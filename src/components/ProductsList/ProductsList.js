import ProductItem from './ProductItem';
const ProductsList = ({ data }) => { 
    return (
        <ul>
            {
                data.map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))
            }
        </ul>
    )
} 
export default ProductsList;