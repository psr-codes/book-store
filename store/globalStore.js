import { create } from "zustand";
// Update the isInCart function to accept an id
const globalStore = create((set) => ({
    cartItems: [],
    addToCart: (item) =>
        set((state) => ({ cartItems: [...state.cartItems, item] })),
    removeFromCart: (item) =>
        set((state) => ({
            cartItems: state.cartItems.filter((i) => i.id !== item.id),
        })),
    isInCart: (id) => {
        const found = globalStore.getState().cartItems.find((i) => i.id === id);
        return !!found; // Return true if found, otherwise false
    },
}));

export default globalStore;
