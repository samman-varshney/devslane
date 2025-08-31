import axios from "axios";

export async function getProducts(query) {
  try {
    const url =
      query.trim() === ""
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/search?q=${query}`;

    const res = await axios.get(url);
    return res.data.products ?? [];
  } catch (err) {
    console.error("API error:", err);
    throw new Error("Product fetch failed: " + err.message);
  }
}



export async function findProduct(id) {
    try{
        const product = await axios.get(`https://dummyjson.com/products/${id}`);
        return product.data;
    }catch(err){
        throw new Error('Product not found');
    }
    
}
