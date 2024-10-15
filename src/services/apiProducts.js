import supabase from "./supabase";

// Fetching all the products
export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }

  return data;
}

// Fetching New Arrivals products
export async function getNewProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("new", true);

  if (error) {
    console.error(error);
    throw new Error("Top sellers could not be loaded");
  }

  return data;
}

// Fetching top seller products
export async function getTopSellerProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("topSeller", true);

  if (error) {
    console.error(error);
    throw new Error("Top sellers could not be loaded");
  }

  return data;
}

// Fetching men category
export async function getMenCategory() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "men");

  if (error) {
    console.error(error);
    throw new Error("Top sellers could not be loaded");
  }

  return data;
}
