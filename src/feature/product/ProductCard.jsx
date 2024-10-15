/* eslint-disable react/prop-types */
import { Heart } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist } from "@/services/apiWishlist";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

function ProductCard({ product }) {
  const [isWished, setIsWished] = useState(false);
  // Adding to wishlist
  const queryClient = useQueryClient();

  const { mutate: createWishlist, isLoading } = useMutation({
    mutationFn: (producId) => addToWishlist(producId),
    onSuccess: () => {
      queryClient.invalidateQueries("wishlist");
      toast("Item has been added to wishlist", {
        description: product.productName,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      setIsWished(true);
    },

    onError: (err) => console.log(err.message),
  });

  function handleWishlist(prodId) {
    createWishlist(prodId);
  }

  const { id, productName, productImage, price, discount } = product;

  console.log(id);

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
          <motion.div
            initial={{ scale: 1 }} // Initial scale
            whileTap={{ scale: 0.9 }} // Scale down on click
            transition={{ type: "spring", stiffness: 300 }} // Add spring effect
          >
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-white/75 rounded-full"
              onClick={() => handleWishlist(id)}
            >
              {/* Conditional rendering for heart icon */}

              {isWished ? (
                <Heart color="#F45B5B" fill="#F45B5B" size={20} />
              ) : (
                <Heart size={20} />
              )}
            </Button>
          </motion.div>
          {/* <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-white/75 rounded-full"
            onClick={() => handleWishlist(id)}
          >
            <Heart className="h-5 w-5" />
          </Button> */}
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
