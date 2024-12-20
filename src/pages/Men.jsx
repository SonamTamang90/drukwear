import ProductCollections from "@/feature/product/ProductCollections";

function Men() {
  return (
    <>
      <div className="bg-brand/20 py-20 flex  items-center justify-center mb-11">
        <h2 className="text-2xl font-extrabold uppercase tracking-wider">
          Men Category
        </h2>
      </div>
      <ProductCollections category="men" />
    </>
  );
}

export default Men;
