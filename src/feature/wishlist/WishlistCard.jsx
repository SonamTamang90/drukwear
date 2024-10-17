import { useWishlist } from "./useWishlist";
import { formatCurrency } from "@/utils/helpers";
import { Button } from "@/components/ui/button";

function WishlistCard() {
  const { wishlists } = useWishlist();

  return (
    <>
      {wishlists &&
        wishlists.map((wishlist) => (
          <div
            className="flex items-center gap-4 justify-start flex-nowrap"
            key={wishlist.id}
          >
            <div className="relative w-[120px] h-42 shrink-0 overflow-hidden aspect-4/5 rounded-md shadow-md">
              <img
                src={wishlist.products.productImage}
                className="w-full h-full object-cover object-center"
              />
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
