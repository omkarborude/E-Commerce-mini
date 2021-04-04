import { useCart } from "../cart-context";
import "./Sorting.css"

export const SortingFunction = () => {
  const { cartState, dispatch } = useCart();
  return (
    <>
    <div className="Filter-Wrap">
      <div  className="clear-filter"
          onClick={() => dispatch({ type: "Clear_Filters" })}
      >
        Clear All Filters
      </div>
      <div
        style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
      >
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="priceSort"
            checked={
              cartState.sortByPrice === "Price_High_to_Low" ? true : false
            }
            onChange={() =>
              dispatch({
                type: "sortByPrice",
                payload: "Price_High_to_Low"
              })
            }
          />
          Price High to Low
        </label> <br/>
        <label>
          <input
            type="radio"
            name="priceSort"
            checked={
              cartState.sortByPrice === "Price_Low_to_High" ? true : false
            }
            onChange={() =>
              dispatch({
                type: "sortByPrice",
                payload: "Price_Low_to_High"
              })
            }
          />
          Price Low to High
        </label>
      </div>
      <div
        style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
      >
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            checked={cartState.showAllProducts}
            onChange={() =>
              dispatch({
                type: "SHOWALLPRODUCTS"
              })
            }
          />
          Include Out of Stock
        </label> <br/>
        <label>
          <input
            type="checkbox"
            checked={cartState.fastDelivery}
            onChange={() =>
              dispatch({
                type: "FAST_DELIVERY"
              })
            }
          />
          Fast Delivery Only
        </label>
      </div>
      <label style={{ display: "block", marginTop: "1rem" }}>
        Price Range
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={cartState.priceRangeMaxValue}
          onInput={(item) =>
            dispatch({ type: "PRICERANGE", value: item.target.value })
          }
        />
      </label>
      </div>
    </>
  );
};
