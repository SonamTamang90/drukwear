import ProductCollections from "@/feature/product/ProductCollections";

function Women() {
  return (
    <>
      <div className="bg-brand/20 py-20 flex  items-center justify-center mb-11">
        <h2 className="text-2xl font-extrabold uppercase tracking-wider">
          Women Category
        </h2>
      </div>
      <ProductCollections category="women" />
    </>
  );
}

export default Women;
