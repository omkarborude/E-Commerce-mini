import { useCart } from "../cart-context";
import "./wishlist.css"

export const WishList = () => {
  const { cartState, dispatch } = useCart();
  return (
    <div>
      {cartState.cartItems.find(({ isWishListed }) => isWishListed) ? (
        cartState.cartItems.map((product) =>
          product.isWishListed ? (
            <div className="Wishlist-Product-Card">
              <div className="Wishlist-Product-div"> 
                <img style={{ width: "auto", height: "100%" }}
                  src={product.image}
                  alt={product.name}
                />
                
              </div>
              <div  className="Wishlist-Product-Info">
                   <h2>{product.name}</h2>
                   <h3>Rs. {product.price}</h3>
                  {/* button */}
                   {product.quantity !== 0 ? (
                <>
                  <button>Already in Cart</button>
                </>
              ) : (
                <button
                  onClick={() => dispatch({ type: "INCREMENT", item: product })}
                >
                  Add to Cart
                </button>
              )}
              <button
                onClick={() => dispatch({ type: "WISHLIST", item: product })}
              >
                {product.isWishListed ? "Remove !" : "Add to WishList"}
              </button>
                </div>
              
            </div>
          ) : (
            ""
          )
        )
      ) : (
        <div className="Empty-wishlist">
          <h3>Wishlist is Empty!!</h3> <p>Add Products to the WishList !! </p>
        </div>
      )}
    </div>
  );
};
