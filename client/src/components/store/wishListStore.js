import { create } from "zustand";

const useWishListStore = create((set) => ({
  wishList: [],
  addToWishList: (gameToAdd) =>
    set((state) => {
      //* Check if the game is already in wish list. If yes then no need to add again, if not, then add it
      //? some() method returns true if atleast one element in the array satisfies the given condition.
      const isGameInWishList = state.wishList.some(
        (game) => game.id === gameToAdd.id
      );
      if (isGameInWishList) {
        return {
          wishList: state.wishList,
        };
      }
      return { wishList: [...state.wishList, gameToAdd] };
    }),
  removeFromWishList: (id) =>
    set((state) => ({
      wishList: state.wishList.filter((item) => item.id !== id),
    })),
    emptyWishList: () => set({ wishList: []}),
}));

export default useWishListStore;
