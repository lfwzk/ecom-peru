import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

import { Store } from "./components/Store";
import { ProductDetails } from "./components/ProductDetails";
<<<<<<< HEAD
=======
import { Computer } from "./components/Computer";
import { Laptop } from "./components/Laptop";
import { Notfound } from "./components/Notfound";
>>>>>>> c8b6b0737a8964c24415a8d1e169c04ad7600235

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Store />} />
<<<<<<< HEAD
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/product/:id" element={<ProductDetails />} />
=======
        <Route path="*" element={<Notfound />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/laptop" element={<Laptop />} />
>>>>>>> c8b6b0737a8964c24415a8d1e169c04ad7600235
      </Routes>
    </>
  );
}

export default App;
