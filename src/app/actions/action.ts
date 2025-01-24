import { Product } from "types/productTypes";


export const addToCart = (product: Product) => {
    if (!product || !product._id) {
        console.error("Invalid product object");
        return;
    }

    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingProductIndex = cart.findIndex(item => item && item._id === product._id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1;
    } else {
        cart.push({
            ...product, inventory: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeFromCart = (productId : string) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const updatedCart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
}

export const updateCartQuantity = (productId :string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

export const calculateTotalPrice = () => {
    const cart : Product[] = getCartItems()
    return cart.reduce((total, item) => total + item.price * item.inventory, 0)
}