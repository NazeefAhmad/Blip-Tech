import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (gameToAdd) => {
    set((state) => {
      //* Check if the game is already in cart. If yes then no need to add again, if not, then add it
      //? some() method returns true if atleast one element in the array satisfies the given condition.
      const isGameInCart = state.cart.some((game) => game.id === gameToAdd.id);
      if (isGameInCart) {
        return {
          cart: state.cart,
        };
      }
      return {
        cart: [...state.cart, gameToAdd],
      };
    });
  },
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      return { cart: updatedCart };
    }),
  emptyCart: () => set({ cart: [] }),
}));

export default useCartStore;
