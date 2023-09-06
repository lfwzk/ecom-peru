import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import { getProducts, getProductImages } from "../services/getProducts";
import { Link } from "react-router-dom";

export const Computer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div>
        <section className="py-6 dark:bg-gray-800">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              {/* -------------------------------------------------------- */}
              {products.map((producto) => {
                return (
                  producto.categoria.attributes.cate_nombre ===
                    "computadoras" && (
                    <div
                      className="card w-full sm:w-80 bg-base-100 shadow-xl p-4"
                      key={producto.id}
                    >
                      <figure className="w-auto h-60 sm:w-full sm:h-80 flex items-center justify-center">
                        <img
                          src={getProductImages(producto.imagenes)}
                          alt={producto.nombre}
                          className="square-image"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{producto.nombre}</h2>
                        <p className="text-lg">BoB. {producto.precio}</p>
                        <div className="card-actions justify-end">
                          <Link
                            className="btn bg-red-500 text-white"
                            to={`/product/${producto.id}`}
                          >
                            Comprar
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                );
              })}

              {/* -------------------------------------------------------- */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
