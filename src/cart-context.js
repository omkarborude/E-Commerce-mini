import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const manageCart = (state, FashionObj, incOrDec) => {
  return {
    ...state,
    cartItems: state.cartItems.map((item) =>
      FashionObj.id === item.id
        ? { ...item, quantity: item.quantity + incOrDec }
        : item
    )
  };
};
const useWishlist = (state, FashionObj) => {
  return {
    ...state,
    cartItems: state.cartItems.map((item) =>
      FashionObj.id === item.id
        ? { ...item, isWishListed: !item.isWishListed }
        : item
    )
  };
};
const sortingByPrice = (cartState, productArray) => {
  switch (cartState.sortByPrice) {
    case "Price_High_to_Low":
      return productArray.sort((a, b) => b.price - a.price);

    case "Price_Low_to_High":
      return productArray.sort((a, b) => a.price - b.price);
    default:
      return productArray;
  }
};

// Stock in & Dilivery
const FilterStockDelivery = ({ sortedArray, cartState }) => {
  const outOfStockProducts = cartState.showAllProducts
    ? sortedArray
    : sortedArray.filter((item) => !item.inStock);
  return !cartState.fastDelivery
    ? outOfStockProducts
    : outOfStockProducts.filter((item) => !item.FastDelivery);
};

// Price
const showPriceRange = (state, data) => {
  return data.filter(
    (product) => Number(product.price) < state.PriceMaxRanged
  );
};

const FashionReducer = (state, action) => {

  // By Action Case
  switch (action.type) {

    case "INCREMENT":
      return manageCart(state, action.item, 1);

    case "DECREMENT":
      return manageCart(state, action.item, -1);

    case "REMOVE":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.item.id ? { ...item, quantity: 0 } : item
        ),
        totalCartValue: state.cartItems.reduce(
          (initialCartValue, item) =>
            action.item.id === item.id
              ? initialCartValue
              : (initialCartValue += item.quantity * item.price),
          0
        )
      };

    case "WISHLIST":
      return useWishlist(state, action.item);

    case "sortByPrice":
      return { ...state, sortByPrice: action.payload };

    case "SHOWALLPRODUCTS":
      return { ...state, showAllProducts: !state.showAllProducts };

    case "FAST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };

    case "PRICERANGE":
      return { ...state, PriceMaxRanged: action.value };

    

    case "SETROUTE":
      return { ...state, route: action.value };

    case "Clear_Filters":
      return {
        ...state,
        sortByPrice: null,
        fastDelivery: false,
        showAllProducts: true,
        PriceMaxRanged: 1000
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children, item: { productLists } }) => {
  const useValue = {
      cartItems: productLists,
      sortByPrice: null,
      fastDelivery: false,
      showAllProducts: true,
      totalCartValue: 0,
      PriceMaxRanged: 1000,
      productPageItem: null,
      route: { category: "Home" }
 
  }
  const [cartState, dispatch] = useReducer(FashionReducer,useValue);

  const sortedArray = sortingByPrice(cartState, productLists);
  const FilterData = showPriceRange(
    cartState,
    FilterStockDelivery({ sortedArray, cartState })
  );
const provideValue = {
  cartState, dispatch, FilterData
}
  return (
    <CartContext.Provider value={ provideValue }>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
