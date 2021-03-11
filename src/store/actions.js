import axios from "axios";
export const getProducts=({commit})=>{
    axios.get("https://fakestoreapi.com/products/").then(response=>{
        // console.log(response.data);
        commit('SET_PRODUCTS',response.data);
    })
}

export const getProduct=({commit},productId)=>{
    axios.get(`https://fakestoreapi.com/products/${productId}/`).then(response=>{
        commit('SET_PRODUCT',response.data)
    })
}


// not working
export const addProductToCart=({commit},{product, quantity})=>{
    commit("ADD_TO_CART",{product, quantity})

    axios.post("https://fakestoreapi.com/carts",{userId:5, date: '2020-02-03', product:[{productId:product.id,quantity:quantity}]})


}

// not working

export const getCartItems=({commit})=>{
    axios.get("https://fakestoreapi.com/cart").then(response=>{
        commit("SET_CART",response.data)
        // console.log(response.data);
    })
}

// 

export const removeProductFromCart=({commit},product)=>{
    commit("REMOVE_PRODUCT_FROM_CART",product)

    // will not work - just for demo
    axios.delete(`https://fakestoreapi.com/carts/${product.id}`)
}

export const clearCartItems=({commit})=>{
    commit("CLEAR_CART_ITEMS")

    // will not work - just for demo
    axios.delete(`https://fakestoreapi.com/carts/`)

}