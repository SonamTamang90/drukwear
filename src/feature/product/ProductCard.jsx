import ColorOptions from "@/components/ColorOptions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/utils/helpers";
import { motion, spring } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import WishlistButton from "../wishlist/WishlistButton";

function ProductCard({ product }) {
  const {
    id,
    product_name,
    main_image_url,
    price,
    discount_price,
    colors,
    edition,
  } = product;

  // // Function to handle wishlist button click
  // const handleWishlistClick = (event) => {
  //   event.stopPropagation(); // Prevent navigation to the product details page
  //   // Handle your wishlist logic here (e.g., add to wishlist)
  //   console.log("Wishlist button clicked");
  // };

  return (
    <Card className="w-full md:w-[240px] aspect-square group">
      <CardHeader className="relative">
        <Link to={`/products/${id}`}>
          <img
            src={main_image_url}
            alt={product_name}
            className="w-full object-cover rounded-sm"
          />
        </Link>

        {/* Wishlist Button */}
        <WishlistButton className="top-2 right-6" />
      </CardHeader>
      <CardContent>
        <span className="inline-block text-xs text-neutral-500 mb-3">
          {edition}
        </span>
        <Link to={`/products/${id}`}>
          <CardTitle className="transition-all duration-300 ease-linear cursor-pointer group-hover:underline">
            {product_name}
          </CardTitle>
        </Link>
      </CardContent>
      <CardFooter>
        <div className="flex items-start gap-4">
          {discount_price && (
            <p className="text-secondary">{formatCurrency(discount_price)}</p>
          )}
          {
            <p
              className={`${
                discount_price
                  ? "text-neutral-600 line-through"
                  : "text-neutral-500"
              }`}
            >
              {formatCurrency(price)}
            </p>
          }
        </div>

        {/* Colors options */}
        <ColorOptions colors={colors} />
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
