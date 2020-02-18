export const toggleCartHidden = () => {
    return {
        type: "TOGGLE_CART_HIDDEN"
    }
}

export const addItem = item => ({
    type: "ADD_ITEM",
    payload: item
})

export const decreaseItem = item => ({
    type: 'DECREASE_ITEM',
    payload: item
})

export const removeItem = item => ({
    type: "REMOVE_ITEM",
    payload: item
})