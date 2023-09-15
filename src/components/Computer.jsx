import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { getProducts, getProductImages } from "../services/getProducts";
import { Link } from "react-router-dom";
import { isInCategory, getCategories,searchCategory } from "../services/getCategories";
export const Computer = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

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
                  producto.subcategoria &&producto.subcategoria.attributes&&
                  categories &&isInCategory(searchCategory(categories,producto.subcategoria.attributes.subc_nombre),"Computadoras")
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
                        <h2 className="card-title">
                          {" "}
                          {truncateTitle(producto.nombre, 20)}
                        </h2>
                        <p className="text-lg">$. {producto.precio}</p>
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
