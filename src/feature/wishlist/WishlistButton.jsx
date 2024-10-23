import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/useWishlist";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function WishlistButton({ productId, className, iconSize }) {
  const { addToWishlist, removeFromWishlist, wishlists, isWishlisting } =
    useWishlist();

  if (isWishlisting) return <p>Loading...</p>;

  const isWishlisted = wishlists?.some(
    (wishlist) => wishlist.productId === productId
  );

  function handleToggle() {
    if (isWishlisted) {
      const wishlistItem = wishlists?.find(
        (item) => item.productId === productId
      );
      removeFromWishlist(wishlistItem.id);
    } else {
      addToWishlist(productId);
    }
  }

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="absolute top-2 right-4"
    >
      <Button
        variant="outline"
        size="icon"
        className={`${className} bg-white border-none rounded-full z-10`}
        onClick={handleToggle}
      >
        {isWishlisted ? (
          <Heart fill="#F45B5B" color="#F45B5B" size={iconSize} />
        ) : (
          <Heart size={iconSize} />
        )}
      </Button>
    </motion.div>
  );
}

export default WishlistButton;
