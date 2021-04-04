import { useCart } from "../cart-context";
import "./navbar.css";

export const Navigation = () => {
  const categories = ["Shirt", "Jacket", "Jeans", "T-Shirt"];
  const { dispatch } = useCart();
  return (
    <>
      <nav className="navbar">
        <div className="Fashion-Name"
          onClick={() =>
            dispatch({ type: "SETROUTE", value: { category: "Home" } })
          }
        >
          <a class="navbar-brand" href="#"><i class="fas fa-shopping-bag"></i> NeoG <span>Fashion</span></a>
        </div>

        <div
          onClick={() =>
            dispatch({
              type: "SETROUTE",
              value: { category: "products", subCategory: "AllProducts" }
            })
          }
        >
          All
        </div>
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() =>
              dispatch({
                type: "SETROUTE",
                value: { category: "products", subCategory: category }
              })
            }
          >
            {category}
          </div>
        ))}
        <div className="div-Cartbtn">
          <button
            onClick={() =>
              dispatch({ type: "SETROUTE", value: { category: "wishlist" } })
            }
            style={{
              marginRight: "1rem"
            }}
          >
            <i class="fas fa-heart"></i> WishList
          </button>
          <button
            onClick={() =>
              dispatch({ type: "SETROUTE", value: { category: "cart" } })
            }
          >
            <i class="fas fa-shopping-cart"></i> Cart
          </button>
        </div>
      </nav>
      <div></div>
    </>
  );
};
