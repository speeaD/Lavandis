import { w as writable } from "./index2.js";
const cartItemsStore = writable(getStorePersistance());
cartItemsStore.subscribe((val) => {
});
function emptyCart() {
  cartItemsStore.set([]);
}
function getStorePersistance(key) {
  {
    return [];
  }
}
export {
  cartItemsStore as c,
  emptyCart as e
};
