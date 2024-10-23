import {
  createWishlist,
  deleteWishlist,
  getWishlists,
} from "@/services/apiWishlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useWishlist() {
  const queryClient = useQueryClient();

  // Fetching wishlists items
  const { data: wishlists, isWishlisting } = useQuery({
    queryKey: ["wishlists"],
    queryFn: getWishlists,

    onSuccess: () => {
      console.log("Successfully fetch wishlists");
      queryClient.invalidateQueries(["wishlists"]);
    },

    onError: () => {
      console.log("Failed to fetch wishlists");
    },
  });

  // Creating new wishlist
  const { mutate: addToWishlist, isCreating } = useMutation({
    mutationFn: createWishlist,

    onSuccess: () => {
      toast("Item added to wishlist");
      queryClient.invalidateQueries(["wishlists"]);
    },

    onError: () => {
      toast("Failed add to wishlist. Please try again");
    },
  });

  // Deleting wishlist
  const { mutate: removeFromWishlist, isRemoving } = useMutation({
    mutationFn: deleteWishlist,
    onSuccess: () => {
      toast("Removed item from wishlist");
      queryClient.invalidateQueries(["wishlists"]);
    },
  });

  return {
    addToWishlist,
    removeFromWishlist,
    isWishlisting,
    wishlists,
  };
}
