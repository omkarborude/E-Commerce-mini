
import './App.css';
import NavBar from "./Comenents/Navbar/navbar";
import { useData } from "../src/Comenents/Context/DataProvider"
import { DefaultProductList } from "../src/Comenents/Products/Products"

function App() {


  return (
    <div className="App">
            <div>< NavBar /></div>
            <DefaultProductList />
            <div className="showing-card">
            </div>
    </div>    


  );
}

export default App;

