import { createContext, useContext, useReducer } from "react";

const SortAndFilterContext = createContext();

const useFashionReducer = (state, action) => {

  switch (action.type) {
    case "sortByPrice":
      return { ...state, sortByPrice: action.payload };

    default:
      return state;
  }
};

export const SortFilterProvider = ({ Children, item: { FashionC } }) => {

const Value = {
  SortbyPrice: null
}
  const [state, sortDispatch] = useReducer(useFashionReducer, Value);
  const SortByPrice = (productItem) => {

    // sort by price
    switch (state.sortByPrice) {
      case "Price_High_to_Low":
        return productItem.sort((a, b) => a.price - b.price);

      case "Price_Low_to_High":
        return productItem.sort((a, b) => b.price - a.price);

      default:
        return productItem;
    }
  };
  const sortedArray = SortByPrice(FashionC);

  return (
    <SortAndFilterContext.Provider value={{ state, sortDispatch, sortedArray }}>
      {Children}
    </SortAndFilterContext.Provider>
  );
};

export const useSortFilter = () => useContext(SortAndFilterContext);
