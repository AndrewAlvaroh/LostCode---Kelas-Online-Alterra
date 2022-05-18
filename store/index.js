import products from '~/mock/products.json'

export const state = () => ({
    products: [],
    cart: [],
})

export const getters = {
    products : state => state.products,
    cart : state => state.cart
}

export const actions = {
   getProducts({commit}) {
       commit("getProductData")
   },
   addToCart({commit} , item) {
    commit("addItemToCart", item)
   },
   plusQty({commit}, id){
    commit("plusQty", id)
   },
   MinQty({commit}, id){
    commit("MinQty", id)
   },
   DeleteItem({commit}, id){
    commit("DeleteItem", id)
   },
}

export const mutations = {
    getProductData(state) {
        state.products = products
    },
    addItemToCart(state, item) {
       const addedItem = state.cart.find(product => product.id === item.id)
       if (addedItem) {
           addedItem.qty++
       }else {
        state.cart.push({...item, qty: 1})
       } 
    },
    plusQty(state,id) {
        const currentItem = state.cart.find(product => product.id === id)
        currentItem.qty++
    },
    MinQty(state,id) {
        const currentItem = state.cart.find(product => product.id === id)
        if(currentItem.qty > 1) {
            currentItem.qty--
        } else {
            state.cart = state.cart.filter((product) => product.id !== id)
        }
    },
    DeleteItem(state,id) {
        state.cart = state.cart.filter((product) => product.id !== id)
    },
}