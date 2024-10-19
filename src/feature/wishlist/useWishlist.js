import {
  addToWishlist,
  deleteWishlist,
  getWishlists,
} from "@/services/apiWishlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function useWishlist(newProductId) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const queryClient = useQueryClient();

  // Fetching the wishlists
  const { data: wishlists, isLoading } = useQuery({
    queryKey: ["wishlists"],
    queryFn: getWishlists,

    onSuccess: () => {
      queryClient.invalidateQueries("wishlists");
    },
  });

  // Mutation to add a product to the wishlist using productID(foreing key)
  const { mutate: addToWishlistMutation } = useMutation({
    mutationFn: (productId) => addToWishlist(productId),
    onSuccess: () => {
      queryClient.invalidateQueries("wishlists");
      toast("Item added to wishlist");
    },

    onError: () => {
      console.error("Failed to add Item to wishlist. Please try again!");
      toast("Failed to add Item to the wishlist. Please try again");
    },
  });

  // Mutation to remove a product from the wishlist using wishlistID
  const { mutate: removeFromWishlistMutation } = useMutation({
    mutationFn: deleteWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries("wishlists");
      toast("Item removed from wishlist");
    },
    onError: () => {
      console.log("Failed to remove wishlist");
      toast("Failed to remove wishlist Item. Please try again!");
    },
  });

  // Handle add or remove the product from the wishlist
  function handleWishlistToggle() {
    if (isWishlisted) {
      const wishlistItem = wishlists.find(
        (item) => item.productId === newProductId
      );
      if (wishlistItem) {
        const wishlistId = wishlistItem.id;

        removeFromWishlistMutation(wishlistId);
        setIsWishlisted(false);
      }
    } else {
      addToWishlistMutation(newProductId);
      setIsWishlisted(true);
    }
  }
  return {
    handleWishlistToggle,
    isWishlisted,
    wishlists,
  };
}
