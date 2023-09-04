import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

import { Store } from "./components/Store";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Store />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
