import { useQuery } from "@tanstack/react-query";
import ProductFilterSidebar from "./ProductFilterSidebar";
import ProductListing from "./ProductListing";
import { getProducts } from "@/services/apiProducts";

function ProductCollections({ category }) {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const filterProducts = products?.filter(
    (product) => product.category === category
  );

  return (
    <div className="container py-11">
      <div className="grid grid-cols-[260px_1fr] gap-11">
        <ProductFilterSidebar products={filterProducts} />
        <ProductListing products={filterProducts} />
      </div>
    </div>
  );
}

export default ProductCollections;
