/* eslint-disable react/prop-types */
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { formatCurrency } from "@/utils/helpers";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addToWishlist,
  deleteWishlist,
  getWishlists,
} from "@/services/apiWishlist";
import { toast } from "sonner";

function ProductCard({ product }) {
  const [isWishlist, setIsWishlist] = useState(false);
  const queryClient = useQueryClient();

  // Fetching current wishlist to set the initial state
  const { data: wishlists } = useQuery({
    queryKey: ["wishlists"],
    queryFn: getWishlists,
    onSuccess: (data) => {
      const initialWishlistState = data.reduce((acc, item) => {
        acc[item.productId] = true; // Mark products as wishlisted
        return acc;
      }, {});
      setIsWishlist(initialWishlistState[product.id] || false);
    },
  });

  // Mutation to add product to the wishlist
  const { mutate: addToWishlistMutation } = useMutation({
    mutationFn: (productId) => addToWishlist(productId),
    onSuccess: () => {
      queryClient.invalidateQueries("wishlists");
      toast("Item added to wishlist", { description: product.productName });
      setIsWishlist(true);
    },
  });

  // Mutation to remove product from the wishlist
  const { mutate: removeFromWishlistMutation } = useMutation({
    mutationFn: (wishlistId) => deleteWishlist(wishlistId),
    onSuccess: () => {
      queryClient.invalidateQueries("wishlists");
      toast("Item removed from wishlist", { description: product.productName });
      setIsWishlist(false);
    },
  });

  // Handle adding and removing from wishlist
  function handleWishlistToggle() {
    const wishlistItem = wishlists?.find(
      (item) => item.productId === product.id
    );

    if (isWishlist) {
      // If product is already in wishlist, remove it using the `wishlist.id`
      if (wishlistItem) {
        removeFromWishlistMutation(wishlistItem.id);
      }
    } else {
      // If product is not in wishlist, add it
      addToWishlistMutation(product.id);
    }
  }

  const { productName, productImage, price, discount } = product;

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
              onClick={handleWishlistToggle}
            >
              {isWishlist ? (
                <Heart size={20} color="#F45B5B" fill="#F45B5B" />
              ) : (
                <Heart size={20} />
              )}
            </Button>
          </motion.div>
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
