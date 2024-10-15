/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { getWishlists } from "@/services/apiWishlist";
import { formatCurrency } from "@/utils/helpers";
import { Button } from "./ui/button";
import { CircleX, Heart } from "lucide-react";

function WishlistCard({ wishlist }) {
  const { data: wishlists } = useQuery({
    queryKey: ["wishlists"],
    queryFn: getWishlists,
  });

  return (
    <>
      {wishlists?.map((wishlist) => (
        <div
          className="flex items-center gap-4 justify-start flex-nowrap"
          key={wishlist.id}
        >
          <div className="relative w-[120px] h-42 shrink-0 overflow-hidden aspect-4/5 rounded-md shadow-md">
            <img
              src={wishlist.products.productImage}
              className="w-full h-full object-cover object-center"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 left-2 h-7 w-7 bg-white/75 rounded-full"
            >
              <Heart fill="#F45B5B" color="#F45B5B" className="h-4 w-4" />
            </Button>
          </div>
          <div className="grow items-stretch flex flex-col flex-wrap gap-1">
            <h3 className="font-bold">{wishlist.products.productName}</h3>
            <p className="mb-5">{formatCurrency(wishlist.products.price)}</p>
            <Button className="text-sm uppercase font-semibold tracking-wider">
              Add to cart
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default WishlistCard;
