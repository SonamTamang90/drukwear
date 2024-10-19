import { getProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const product =
    products && products.find((product) => product.id === parseInt(id));

  console.log(product);

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error loading product details. Please try again later.</div>;
  }

  return (
    <div className="">
      <div className="container">
        <h2>{product.product_name}</h2>
      </div>
    </div>
  );
}

export default ProductDetail;
