import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  // აქ ამოიღე პროპებიდან რაც გჭირდება  ერთი აითემისთვის. ჩათვალე ესაა ერთი პროდუქტის დეითა
  const { id, gallery, name, description } = data; 

  return (
    <li style={{margin: "10px  0", border: "1px solid black"}}>
      <Link to={`/products/${id}`}>
        <h1>{name}</h1>
        <img
          style={{ width: 80, height: 80 }}
          src={gallery[1]}
          alt={description}
        />
        {/* <p>{description}</p> */}
      </Link>
    </li>
  );
};

// ეს არის ul-ის li. ასეთი იქნება ბევრი, იმდენი რამდენიც გაქვს დეითაში პროდუქტი.
// პროპები მოდის მშობლიდან, ანუ ProductsList აქედან
export default ProductItem;


