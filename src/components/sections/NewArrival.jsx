import { getNewProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ProductCard from "../../feature/product/ProductCard";

function NewArrival() {
  const {
    data: newArrivalProducts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["newProducts"],
    queryFn: getNewProducts,
  });

  return (
    <section className="py-11">
      <div className="container">
        {/* Section header */}
        <div className="mb-11">
          <h2 className="text-3xl uppercase font-extrabold tracking-widest mb-2">
            New Arrival
          </h2>
          <p className="tracking-wider space-x-2">
            <span className="text-secondary font-semibold uppercase ">
              17% off
            </span>
            <span>on all our newly launch products</span>
          </p>
        </div>
        {/* Section header ends here */}

        {/* Display new arrival product list */}
        <Carousel>
          <CarouselContent>
            {newArrivalProducts &&
              newArrivalProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* Display new arrival product list ends here */}
      </div>
    </section>
  );
}

export default NewArrival;
