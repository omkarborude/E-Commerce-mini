import { useCart } from "../cart-context";
import { productLists } from "../database";
import { SortingFunction } from "../Sorting/SortingAll";
import "./productlist.css"

export const ProductListing = () => {
  // const dilvryyes = "Yess"
  // const dilvryNot = "Noo"
  const { dispatch, FilterData, cartState } = useCart();
  return (
    <>
    {/* Check Route First */}
    <div className="main-wrapper">
      {cartState.route.category === "products" && <SortingFunction />}
      <div className="middle-main-div">
        {FilterData.map((product) => {
          if (
            product.category === cartState.route.subCategory ||
            cartState.route.subCategory === "AllProducts"
          )
            return (
              <div className="Card-main-div"
                key={product.id}
                
              >
                <div className="img-div">
                  <img
                    src={product.image}
                  />
                  <div className="product-info">
                    <h4>{product.name}</h4>  
                    <p className="material-name">{product.material}</p>
                    <p className="product-price">Rs. {product.price}</p>
                    <p
                        className={
                          product.FastDelivery
                   ? "FastDelivery-Tag-false"
                   : "FastDelivery-Tag-true"
                        }
                         >
                       Fast Delivery
                      </p>
                      <p
                      className={
                        product.inStock ? "inStock-Tag-True" : "inStock-Tag-False"
                      }
                      >In Stock</p>
                  </div>
                </div>
                <div className="bottom-btn-div">
                  {cartState.cartItems.map((ProductItem) => {
                    if (ProductItem.id === product.id)
                      return ProductItem.quantity !== 0 ? (
                        <>
                          <button style={{borderRight:"1px solid black"}}>
                            Already in Cart
                          </button>
                            
                        </>
                      ) : (
                        <button
                        style={{borderRight:"1px solid black"}}
                          key={product.id}
                          onClick={() =>
                            dispatch({ type: "INCREMENT", item: product })
                          }
                        >
                          Add to Cart
                        </button>
                      );
                    return "";
                  })}
               
                  <button
                    key={product.id}
                    onClick={() =>
                      dispatch({ type: "WISHLIST", item: product })
                    }
                  >
                    {cartState.cartItems.map((cartProduct) => {
                      if (cartProduct.id === product.id)
                        return cartProduct.isWishListed
                          ? "Wishlisted"
                          : "Add to WishList";
                      return "";
                    })}
                  </button>
                </div>
              </div>
            );
          return "";
        })}
      </div>
      </div>
    </>
  );
};
