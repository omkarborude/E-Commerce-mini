import { Cart } from "./Cart/Cart";
import { ProductListing } from "./ProductList/ProductListing";
import { WishList } from "./WIshlist/WishList";
import "./styles.css";
import { useCart } from "./cart-context";
import { Navigation } from "./Navbar/Navigation";
import { Homepage } from "./Homepage/Homepage";

export default function App() {
  const { cartState } = useCart();

  return (
    <div className="App">
      <Navigation />
      {cartState.route.category === "Home" && <Homepage />}
      {<ProductListing />}
      {cartState.route.category === "cart" && <Cart />}
      {cartState.route.category === "wishlist" && <WishList />}
    </div>
  );
}
