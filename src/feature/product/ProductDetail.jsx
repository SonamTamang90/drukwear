import { Button } from "@/components/ui/button";
import { getProducts } from "@/services/apiProducts";
import { formatCurrency } from "@/utils/helpers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { Container, Leaf, Shirt, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScrollArea } from "@/components/ui/scroll-area";

function ProductDetail() {
  // Fetching the current product id clicked
  const { id } = useParams();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetching all the products.
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,

    onSuccess: () => {
      console.log("Successfully fetch products");
    },

    onError: () => {
      console.log("Failed to fetch products");
    },
  });

  // Finding and filtering the product based on id clicked
  const product = products && products.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const sliderRef = useRef(null);

  // Add the main image as the first image in the slider array
  const allImages = product
    ? [product.main_image_url, ...product.additional_images]
    : [];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  function handleTumbnailClick(index) {
    setSelectedImage(index);
    sliderRef.current.slickGoTo(index);
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="py-11">
      <div className="container">
        <div className="flex-col md:flex-row flex gap-8">
          <div className="w-full md:w-3/5">
            <div className="flex gap-8">
              {/* Product carousel with related images ends here */}
              <div className="hidden md:w-1/4  md:block">
                <div>
                  <ScrollArea className="w-full h-[690px]">
                    <div className="flex flex-col space-y-4">
                      {allImages.map((image, index) => (
                        <div
                          key={index}
                          className="cursor-pointer"
                          onClick={() => handleTumbnailClick(index)}
                        >
                          <img
                            src={image}
                            className="w-full object-contain rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
              {/* Product carousel with related images ends here */}
              <div className="w-full md:w-[75%]">
                <Slider {...settings} ref={sliderRef}>
                  {allImages.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="hidden md:block mt-11">
              <h3 className="font-semibold mb-4">Description</h3>
              <p className="text-sm tracking-wider text-neutral-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                iste magni labore provident est accusantium nesciunt animi quod
                architecto tempore dolorem sunt officiis, nulla eligendi sequi.
                Praesentium molestias aspernatur dolor non ipsam officia
                doloremque voluptas. Harum neque tempore non animi modi,
                reiciendis voluptas, ratione possimus saepe, labore earum
                provident mollitia.
              </p>
            </div>
          </div>

          {/* Product details */}
          <div className="w-full md:w-2/5">
            <div className="tracking-wider">
              <p className="text-sm text-neutral-500 mb-3">{product.edition}</p>
              <h2 className="text-xl font-extrabold uppercase">
                {product.product_name}
              </h2>

              {/* Product reviews */}
              <div className="flex items-center gap-1 my-6">
                {Array.from({ length: 5 }, (_, i) => i).map((index) => (
                  <Star size={20} fill="#60F0BD" key={index} />
                ))}
                <p className="text-xs text-neutral-500">5,321 reviews</p>
              </div>
              {/* Product reviews */}

              {/* Product pricing  */}
              <div>
                <div className="flex items-center gap-4 text-xl">
                  {product.discount_price && (
                    <p>{formatCurrency(product.discount_price)}</p>
                  )}
                  <p
                    className={`${
                      product.discount_price
                        ? "line-through text-neutral-500"
                        : ""
                    }`}
                  >
                    {formatCurrency(product.price)}
                  </p>
                </div>
                {product.discount_price && (
                  <p className="text-xs font-semibold text-secondary uppercase mt-1">
                    25% off applied limited time
                  </p>
                )}
              </div>
              {/* Product pricing  */}
            </div>

            {/* Sizes and size guide */}
            <div className="tracking-wider mt-6">
              <div className="flex items-center  gap-1 mb-4">
                <div className="text-lg text-neutral-500">Size:</div>
                <div className="font-semibold">XS</div>
              </div>
              <div className="flex flex-wrap gap-4">
                {product.size.map((size, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="uppercase hover:bg-neutral-100"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            {/* Sizes and size guide */}

            {/* Product colors choices */}
            <div className="tracking-wider mt-6">
              <div className="flex items-center gap-1 mb-4">
                <div className="text-lg text-neutral-500">Colors:</div>
                <div className="font-semibold">Black</div>
              </div>
              <div className="flex gap-4 mb-11">
                {product.colors.map((color, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 rounded-full"
                    style={{ backgroundColor: color.code }}
                  ></Button>
                ))}
              </div>
            </div>
            {/* Product colors choices */}
            <Button className="w-full uppercase tracking-wider font-semibold py-6">
              Add to cart
            </Button>

            <div className="mt-6">
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">Material</h3>
                <p className="text-sm text-neutral-500">
                  Made from 100% cotton
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Care</h3>
                <p className="text-sm text-neutral-500">
                  Cold machine wash. Tumble dry. Warm iron.
                </p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full mt-11">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-2 font-semibold">
                    <Shirt size={24} fill="#F5F5F5" /> <span>Size & Fit</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem molestias, ipsa saepe dicta corrupti doloribus.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-2 font-semibold">
                    <Container size={24} fill="#F5F5F5" />{" "}
                    <span>Shipping & Returns</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem molestias, ipsa saepe dicta corrupti doloribus.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-2 font-semibold">
                    <Leaf size={24} fill="#F5F5F5" />{" "}
                    <span>Sustainability</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem molestias, ipsa saepe dicta corrupti doloribus.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Product details ends here */}
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
