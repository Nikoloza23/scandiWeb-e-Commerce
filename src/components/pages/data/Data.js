import { useQuery } from "@apollo/client";
import Card from "../../card/Card";
import { GET_CATEGORY } from "./Queries";

function Data({ categoryName }) {
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { title: categoryName },
  });

  if (error) {
    return <p>Error...{error.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(data);

  return (
    <>
      <div className="row">
        {data.category.products.map((products) => (
            <Card products={products} key={products.id} />
        ))}
      </div>
    </>
  );
}

export default Data;
