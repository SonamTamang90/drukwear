/* eslint-disable react/prop-types */
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { formatCurrency } from "@/utils/helpers";
import WishlistButton from "../wishlist/WishlistButton";
import { useWishlist } from "../wishlist/useWishlist";

function ProductCard({ product }) {
  const { id, productName, productImage, price, discount } = product;

  const { isWishlisted, handleWishlistToggle } = useWishlist(id);

  return (
    <Card className="cursor-pointer">
      <CardContent className="relative">
        <img
          src={productImage}
          alt={productName}
          className="w-full rounded-md shadow-sm"
        />

        <div className="absolute top-4 w-full flex items-start justify-between px-6">
          <Badge>New</Badge>
          <WishlistButton
            isWishlisted={isWishlisted}
            onClick={handleWishlistToggle}
          />
        </div>
      </CardContent>

      <CardFooter>
        <h3 className="mb-3">{productName}</h3>
        <div className="flex items-start font-semibold">
          {discount && (
            <p className="text-secondary mr-6">{formatCurrency(discount)}</p>
          )}
          <p className={`${discount ? "line-through" : ""}`}>
            {formatCurrency(price)}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
