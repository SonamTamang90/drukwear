/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

function WishlistButton({ isWishlisted, onClick }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={onClick}
        className=" bg-neutral-100 rounded-full"
      >
        {isWishlisted ? (
          <Heart size={20} color="#F45B5B" fill="#F45B5B" />
        ) : (
          <Heart size={20} />
        )}
      </Button>
    </motion.div>
  );
}

export default WishlistButton;
