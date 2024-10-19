import Marquee from "react-fast-marquee";
import FlashDealCounter from "../FlashDealCounter";
import { useQuery } from "@tanstack/react-query";
import { getFlashDealProducts } from "@/services/apiProducts";
import { formatCurrency } from "@/utils/helpers";

function FlashSale() {
  const targetDate = "2024-12-31T23:59:59";

  const { data: products, isLoading } = useQuery({
    queryKey: ["flashDeals"],
    queryFn: getFlashDealProducts,
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
              {products?.map((product) => (
                <div key={product.id} className="w-[240px] mx-2">
                  <div className="relative">
                    <img
                      src={product.main_image_url}
                      alt={product.product_name}
                      className="w-full rounded-md"
                    />
                    <div className="absolute top-5 left-5">
                      {product.stock_quantity === null ? (
                        <div className="bg-brand/80 text-xs font-semibold uppercase px-2 py-1 rounded-md">
                          <span>Sold Out</span>
                        </div>
                      ) : (
                        <>
                          <div className="bg-brand/80 text-xs font-semibold uppercase px-2 py-1 rounded-md">
                            <span>{product.stock_quantity} stock left</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="">{product.product_name}</h3>
                    <div className="flex items-start font-semibold">
                      {product.discount_price && (
                        <p className="text-secondary mr-6">
                          {formatCurrency(product.discount_price)}
                        </p>
                      )}
                      <p
                        className={`${
                          product.discount_price
                            ? "text-neutral-400 line-through"
                            : ""
                        }`}
                      >
                        {formatCurrency(product.price)}
                      </p>
                    </div>
                    <div>
                      {product.stock_quantity <= 5 &&
                        product.stock_quantity && (
                          <span className="text-xs font-semibold text-secondary">
                            Hurry! Limited stock
                          </span>
                        )}
                    </div>
                  </div>
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
