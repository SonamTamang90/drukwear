import { Heart } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/helpers";

function ProductCard({ product }) {
  const { id, productName, productImage, price, discount } = product;

  return (
    <Card className="cursor-pointer">
      <CardContent className="relative">
        <img
          src={productImage}
          alt={productName}
          className="rounded-md shadow-sm"
        />

        <div className="absolute top-4 w-full flex items-start justify-between px-6">
          <Badge>New</Badge>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-white/75 rounded-full"
            onClick={() => handleAddToWishList(id)}
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>

      <CardFooter>
        <h3 className="mb-3">{productName}</h3>
        <div className="flex items-start font-semibold">
          {discount && <p className="text-secondary mr-6">{discount}</p>}
          <p className={`${discount ? "line-through" : ""}`}>
            {formatCurrency(price)}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
