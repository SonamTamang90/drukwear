import { getNewProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../feature/product/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

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
        <div className="mb-8">
          <h2 className="text-2xl uppercase font-extrabold tracking-widest">
            New Arrival
          </h2>
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
