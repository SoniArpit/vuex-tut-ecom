// import axios from "axios";
import Product from '../apis/Product'
import Cart from '../apis/Cart'

export const getProducts=({commit})=>{
    Product.all().then(response=>{
        // console.log(response.data);
        commit('SET_PRODUCTS',response.data);
    })
}

export const getProduct=({commit},productId)=>{
    Product.show(productId).then(response=>{
        commit('SET_PRODUCT',response.data)
    })
}


// not working api
export const addProductToCart=({commit},{product, quantity})=>{
    commit("ADD_TO_CART",{product, quantity})
    Cart.store({userId:5, date: '2020-02-03', product:[{productId:product.id,quantity:quantity}]})
}

// not working api
export const getCartItems=({commit})=>{
    Cart.all().then(response=>{
        commit("SET_CART",response.data)
        // console.log(response.data);
    })
}

// 

export const removeProductFromCart=({commit},product)=>{
    commit("REMOVE_PRODUCT_FROM_CART",product)

    // will not work - just for demo
    Cart.delete(product.id)
}

export const clearCartItems=({commit})=>{
    commit("CLEAR_CART_ITEMS")

    // will not work - just for demo
    Cart.deleteAll()

}