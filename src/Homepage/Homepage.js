import { useCart } from "../cart-context";
import "./homepage.css"
import Homeimg from './home.jpg';

export const Homepage = () => {
  const { dispatch } = useCart();
  return (
    <>
    
       <div className="Home-main-div">
         <div className="Home-img-div">
           <img src={Homeimg} />
           <button
           onClick={() =>
             dispatch({
              type: "SETROUTE",
              value: { category: "products", subCategory: "AllProducts" }
             })}>
                Shop Now
             </button>
         </div>
       </div>
    </>
  );
};



