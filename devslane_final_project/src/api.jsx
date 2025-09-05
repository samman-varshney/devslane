import axios from "axios";

export async function getProducts({sort, search, page}) {
    const params = {};
    if(sort === 'price-desc'){
        params.sortby = 'price';
        params.sortType = 'desc';
    }else{
        params.sortby = sort;
    }   
    params.search = search.trim();
    params.page = page;

  try {
    const res = await axios.get('https://myeasykart.codeyogi.io/products', {
        params,
        headers:{
            Authorization: localStorage.getItem('token')
        }
    });
    return res.data;
  } catch (err) {
    console.error("API error:", err);
    throw new Error("Product fetch failed: " + err.message);
  }
}



export async function findProduct(id) {
    try{
        const product = await axios.get(`https://myeasykart.codeyogi.io/product/${id}`);
        return product.data;
    }catch(err){
        throw new Error('Product not found');
    }
    
}

export async function getProductsByIds(ids){
    const idStr = ids.join(',');
    console.log(idStr);
    try{
        const response = await axios.get(`https://myeasykart.codeyogi.io/products/bulk`,{
            params: {
                ids: idStr
            }
        });
        return response.data;
    }catch(err){
        console.error('cart fetching failed: ', err);
        throw new Error('Failed to fetch cart Items');
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

export async function saveCart(cart){
    try{
        const response = await axios.post('https://myeasykart.codeyogi.io/carts', {
            data: cart,
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        return response.data;
    }catch(err){
        console.error("failed to save to cart: ", err);
        throw new Error('Failed to save Cart');
    }
}
export async function getCart(){
    console.log('my token: ', localStorage.getItem('token'));
    try{

        const response = await axios.get('https://myeasykart.codeyogi.io/carts',{
            headers :{
                Authorization: localStorage.getItem('token')
            }
        });
        return response.data;
    }catch(err){
        console.error("failed to get to cart: ", err);
        throw new Error('Failed to get Cart');
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