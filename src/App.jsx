import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

import { Store } from "./components/Store";
import { ProductDetails } from "./components/ProductDetails";
import { Computer } from "./components/Computer";
import { Laptop } from "./components/Laptop";
import { Notfound } from "./components/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Store />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/laptop" element={<Laptop />} />
      </Routes>
    </>
  );
}

export default App;
