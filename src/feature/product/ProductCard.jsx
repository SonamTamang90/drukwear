import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ColorOptions from "@/components/ColorOptions";
import { formatCurrency } from "@/utils/helpers";
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

  return (
    <Card className="w-full max-w-[240px] aspect-square group">
      <CardHeader className="relative">
        <Link to={`/products/${id}`}>
          <img
            src={main_image_url}
            alt={product_name}
            className="w-full object-cover rounded-sm"
          />
        </Link>

        {/* Wishlist Button */}
        <WishlistButton productId={id} iconSize={20} />
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
