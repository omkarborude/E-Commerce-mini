import { useData } from "../Context/DataProvider";


export function DefaultProductList() {

  const {ProductList , setProductList } = useData();

 
  return ProductList.map((productitem) => {
      
    <div className="inner-listing-div">
<h1>omkar</h1>
    <div  className="productlist">
      <div className="imd-div"><img src={productitem.image} alt=""/></div>
    <div className="info">
    <h2 className="name">{productitem.Name}</h2>


    <h3 className="price">₹ {productitem.price}</h3>
    </div>
   <button
   className="BTNaddtocart"
   >
     Add To Cart
   </button>
  
   </div>
</div>
  })

}



