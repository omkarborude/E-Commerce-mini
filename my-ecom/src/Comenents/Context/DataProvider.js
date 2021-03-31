import { createContext, useContext, useReducer, useState } from "react";
import { ProductsData} from "./ProductsData";
import { reducerFunction } from "./ReducerFunction";


 export const DataContext = createContext();

export function DataProvider({ children }) {
    const [ProductList, setProductList] = useState(ProductsData);

    const [ state, dispatch ] = useReducer(reducerFunction,{value:0});

    return(

         <DataContext.Provider
         value={{state,dispatch,ProductList,setProductList}}
         >
             {children}
         </DataContext.Provider>

    )
}

export function useData() {
   return useContext(DataContext);
}