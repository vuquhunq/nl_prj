
class CartService {
    addCart(payload){
        localStorage.setItem("cart-detail", JSON.stringify(payload))
    }
    getCart() {
     let cartDetail = localStorage.getItem('cart-detail');
     return JSON.parse(cartDetail)
    }
}
export default new CartService()