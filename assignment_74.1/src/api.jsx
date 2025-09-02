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

export async function getUserDetails(token) {
    try {
        const response = await axios.get("https://myeasykart.codeyogi.io/me", {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user details:", error);
        throw new Error("Failed to fetch user details");
    }
}

export async function signIn(values){
    const {email, password} = values;
    try{
        const response = await axios.post('https://myeasykart.codeyogi.io/login', {
            email,
            password
        });
        return response.data;
    }catch(err){
        console.error('Error during sign in:', err);
        throw new Error('Sign in failed');
    }
}

export async function signUp(values) {
    
    try{
        const response = await axios.post('https://myeasykart.codeyogi.io/signup',{...values});
        console.log(response)
        return response.data;
    }catch(err){
        throw new Error('Sign Up failed');
    }
}