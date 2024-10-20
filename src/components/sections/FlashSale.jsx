import Marquee from "react-fast-marquee";
import FlashDealCounter from "../FlashDealCounter";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/feature/product/ProductCard";
import { getProducts } from "@/services/apiProducts";

function FlashSale() {
  const targetDate = "2024-12-31T23:59:59";

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <section className="py-11">
      <div className="container">
        {/* Section header */}
        <div className="mb-11">
          <h2 className="text-3xl uppercase font-extrabold tracking-widest mb-4">
            Flash Sale
          </h2>
          <FlashDealCounter targetDate={targetDate} />
        </div>

        <div>
          <Marquee autoFill pauseOnHover direction="right">
            <div className="flex">
              {products &&
                products.map((product) => (
                  <div key={product.id} className="mx-5">
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default FlashSale;
