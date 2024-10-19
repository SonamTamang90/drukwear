import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function Categories() {
  return (
    <section className="py-11">
      <div className="container">
        {/* Section header */}
        <div className="mb-11">
          <h2 className="text-3xl uppercase font-extrabold tracking-widest mb-2">
            Shop by category
          </h2>
        </div>

        {/* Display new arrival product list */}
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/3">
              <Link to="/women" className="relative">
                <img
                  src="./women-tshirt.png"
                  alt="women tshirt"
                  className="w-full object-cover rounded-md"
                />
                <div className="absolute bottom-10 left-6 flex items-center gap-4">
                  <h2 className="text-3xl text-white font-extrabold uppercase tracking-wider">
                    Women Tee
                  </h2>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Link to="/women" className="relative">
                <img
                  src="./shoes.png"
                  alt="women tshirt"
                  className="w-full object-cover rounded-md"
                />
                <div className="absolute bottom-10 left-6 flex items-center gap-4">
                  <h2 className="text-3xl text-white font-extrabold uppercase tracking-wider">
                    Shoes
                  </h2>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Link to="/women" className="relative">
                <img
                  src="./bags.png"
                  alt="women tshirt"
                  className="w-full object-cover rounded-md"
                />
                <div className="absolute bottom-10 left-6 flex items-center gap-4">
                  <h2 className="text-3xl text-white font-extrabold uppercase tracking-wider">
                    Handbags
                  </h2>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Link to="/women" className="relative">
                <img
                  src="./men-tshirt.png"
                  alt="women tshirt"
                  className="w-full object-cover rounded-md"
                />
                <div className="absolute bottom-10 left-6 flex items-center gap-4">
                  <h2 className="text-3xl text-white font-extrabold uppercase tracking-wider">
                    Men Plain Tee
                  </h2>
                </div>
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* Display new arrival product list ends here */}
        {/* Section header ends here */}
      </div>
    </section>
  );
}

export default Categories;
