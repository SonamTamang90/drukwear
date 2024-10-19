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

function ProductCard({ product }) {
  const {
    product_name,
    main_image_url,
    price,
    discount_price,
    colors,
    edition,
  } = product;

  return (
    <Card className="w-[240px] aspect-square cursor-pointer group">
      <CardHeader className="relative">
        <img
          src={main_image_url}
          alt={product_name}
          className="w-full object-cover rounded-sm"
        />
        {/* Wishlist Button */}
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute top-3 right-4"
        >
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 border-none rounded-full"
          >
            <Heart size={20} />
          </Button>
        </motion.div>
      </CardHeader>
      <CardContent>
        <span className="inline-block text-xs text-neutral-500 mb-3">
          {edition}
        </span>
        <CardTitle className="transition-all duration-300 ease-linear group-hover:underline">
          {product_name}
        </CardTitle>
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
