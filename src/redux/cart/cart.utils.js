export const addItemToCart = (cartItems, itemToAdd) => {
    const existing = cartItems.find( cartItem => (
        cartItem.id === itemToAdd.id
    ));

    if (existing) {
        return cartItems.map( cartItem => (
            cartItem.id === itemToAdd.id 
                ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                :
                cartItem
        ))
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 } ]
}

export const decreaseItem = (cartItems, itemToDec) => {

    const existing = cartItems.find( item => item.id === itemToDec.id );

    if (existing.quantity === 1) {
        return cartItems.filter( item => item.id !== itemToDec.id)
    };

    return cartItems.map( item => 
        item.id === itemToDec.id ?
        { ...item, quantity: item.quantity - 1 }
        : 
        item
    );
}

export const removeItem = (cartItems, itemToRemove) => {
    return cartItems.filter( item => item.id !== itemToRemove.id)
}