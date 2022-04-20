import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  // when backdrop clicked it shoule close, and when the navbar clicked it shoule open
  // initially set false
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      {/* sideToggle=false->hidden, true->show */}
      {/* the sideDrawer and Backdrop will apeare together, and only on mobile display */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/product/:id" element={<ProductScreen/>}/>
          <Route exact path="/cart" element={<CartScreen/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
