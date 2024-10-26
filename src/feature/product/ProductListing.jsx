import ProductCard from "./ProductCard";

function ProductListing({ products }) {
  return (
    <div className="grid grid-cols-3 gap-y-11">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListing;
