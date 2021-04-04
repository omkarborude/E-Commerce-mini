import { useCart } from "../cart-context";
import "./Cart.css"

export const Cart = () => {
  const { cartState, dispatch } = useCart();

  // Total Cart Value
  const totalCartValue = cartState.cartItems.reduce(
    (acc, { price, quantity }) => (acc += price * quantity),
    0
  );

  // Returning Main
  return (
    <>
    {/* First Check  Cart is Empty or Not */}
      {totalCartValue !== 0 ? (
        <div className="Cart-Total-Value">Total Cart Value: Rs.<span>{totalCartValue}</span></div>
      ) : (
        <div className="Cart-Empty">
         <h3>Cart is Empty!!</h3> <p>Add Products to the cart !! </p>
        </div>
      )}

      {/* return Cart items */}
      {cartState.cartItems.map((product) => {
        if (product.quantity !== 0)
          return (
            <div className="Cart-Product-Card"
              // style={{
              //   border: "1px solid black",
              //   padding: "0 0 1rem",
              //   margin: "1rem",
              //   maxWidth: "25%"
              // }}
            >
              <div className="Cart-Product-div">
                <img className="Cart-Product-img"
                  style={{ width: "auto", height: "100%" }}
                  src={product.image}
                  alt={product.name}
                />

              </div>
              <div className="Cart-Product-Info">
              <p>{product.name}</p>
                <button
                  onClick={() => dispatch({ type: "INCREMENT", item: product })}
                >
                  +
                </button>
                <span> {product.quantity} </span>
                <button
                  onClick={() => dispatch({ type: "DECREMENT", item: product })}
                >
                  -
                </button>
                <h3>Rs. {product.quantity * product.price}</h3>
                <div>
                  <button
                    onClick={() => dispatch({ type: "REMOVE", item: product })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        return "";
      })}
    </>
  );
};
