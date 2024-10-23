import { useWishlist } from "@/hooks/useWishlist";
import { formatCurrency } from "@/utils/helpers";
import { Button } from "@/components/ui/button";
import WishlistButton from "./WishlistButton";
import { AnimatePresence, motion } from "framer-motion";

const wishlistVariants = {
  hidden: { opacity: 0, x: -100 }, // Start with hidden to the left
  visible: { opacity: 1, x: 0 }, // Animate to its position
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }, // Smooth slide left with fade
};

function WishlistCard() {
  const { wishlists } = useWishlist();

  return (
    <>
      <AnimatePresence>
        {wishlists &&
          wishlists.map((wishlist) => (
            <motion.div
              className="flex items-center gap-4 justify-start flex-nowrap"
              key={wishlist.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={wishlistVariants}
              layout
            >
              <div className="relative w-[120px] h-42 shrink-0 overflow-hidden aspect-4/5 rounded-md shadow-md">
                <img
                  src={wishlist.products.main_image_url}
                  className="w-full h-full object-cover object-center"
                />
                <WishlistButton
                  productId={wishlist.products.id}
                  className="w-6 h-6"
                  iconSize={14}
                />
              </div>
              <div className="grow items-stretch flex flex-col flex-wrap gap-1">
                <h3 className="font-bold">{wishlist.products.product_name}</h3>
                <p className="mb-5">
                  {formatCurrency(wishlist.products.price)}
                </p>
                <Button className="text-sm uppercase font-semibold tracking-wider">
                  Add to cart
                </Button>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  );
}

export default WishlistCard;
