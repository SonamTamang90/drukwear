import supabase from "./supabase";

// Adding a wishlist
export async function addToWishlist(id) {
  const { data, error } = await supabase
    .from("wishlists")
    .insert([{ productId: id }]);

  if (error) {
    console.error("Error adding to wishlist:", error.message);
    throw new Error("Wishlist could not be added");
  }
  console.log(data);
  return data;
}

// Fetching all the wishlist
export async function getWishlists() {
  const { data, error } = await supabase
    .from("wishlists")
    .select(
      `id, productId, products(id, productName, price, productImage, discount)`
    );

  if (error) {
    console.error(error);
    throw new Error("Wishlist could not be loaded");
  }
  console.log(data);
  return data;
}

// Deleting the wishlist

export async function deleteWishlist(productId) {
  const { data, error } = await supabase
    .from("wishlists")
    .delete()
    .eq("id", productId);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
