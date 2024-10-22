import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function WishlistButton({ onClick, className }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`absolute ${className}`}
    >
      <Button
        variant="outline"
        size="icon"
        className="bg-white/90 border-none rounded-full z-40"
        onClick={onClick}
      >
        <Heart size={20} />
      </Button>
    </motion.div>
  );
}

export default WishlistButton;
