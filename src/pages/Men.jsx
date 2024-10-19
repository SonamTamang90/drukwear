import ProductDetail from "@/feature/product/ProductDetail";

function Men() {
  return (
    <>
      <div className="bg-brand/20 py-20 flex  items-center justify-center">
        <h2 className="text-2xl font-extrabold uppercase tracking-wider">
          Men Category
        </h2>
      </div>
      <div className="container">
        <ProductDetail />
      </div>
    </>
  );
}

export default Men;
