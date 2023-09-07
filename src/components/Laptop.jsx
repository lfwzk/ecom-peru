import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { getProducts, getProductImages } from "../services/getProducts";
import { Link } from "react-router-dom";

export const Laptop = () => {
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
              {products.map((producto) => {
                if (
                  producto &&
                  producto.categoria &&
                  producto.categoria.attributes &&
                  producto.categoria.attributes.cate_nombre === "Laptop"
                ) {
                  return (
                    <div
                      className="card w-full sm:w-80 bg-base-100 shadow-xl p-4"
                      key={producto.id}
                    >
                      <figure className="w-auto h-60 sm:w-full sm:h-80 flex items-center justify-center">
                        <img
                          src={getProductImages(producto.imagen_perfil)}
                          alt="Shoes"
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{producto.nombre}</h2>
                        <p className="text-lg">$. {producto.preciomenor}</p>
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
                  );
                }
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
