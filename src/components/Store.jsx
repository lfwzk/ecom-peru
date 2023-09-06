import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

import { getProductImages, getProducts } from "../services/getProducts";

export const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="py-6 dark:bg-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {products.map((producto) => (
              <div
                className="card bg-gray-100 dark:bg-gray-700 shadow-xl p-4 md:p-8"
                key={producto.id}
              >
                <figure className="w-full h-64 sm:h-80 flex items-center justify-center">
                  <img
                    src={getProductImages(producto.imagenes)}
                    alt="images"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-xl font-bold text-center">
                    {producto.nombre}
                  </h2>
                  <p className="text-lg">PRECIO: Soles {producto.precio}</p>
                  <div className="text-center mt-4">
                    <Link
                      className="btn bg-red-500 text-white"
                      to={`/product/${producto.id}`}
                    >
                      Comprar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
