import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { getProducts, getProductImages } from "../services/getProducts";
import {
  isInCategory,
  getCategories,
  searchCategory,
} from "../services/getCategories";
import { Link } from "react-router-dom";

export const Accesories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Estado para la categoría seleccionada
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    // Obtener los productos
    getProducts()
      .then((data) => {
        // Inicializar la variable data con los productos originales
        setOriginalProducts(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Obtener las categorías
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const restoreAllProducts = () => {
    setProducts(originalProducts);
    setSelectedCategory("All");
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category); // Actualizar la categoría seleccionada
    console.log(category);
  };

  return (
    <>
      <Header />
      <div>
        <section className="py-6 dark:bg-gray-800">
          <div className="join join-vertical lg:join-horizontal sm:join-vertical ">
            <div>
              <button
                className={`btn join-item btn-error  ${
                  selectedCategory === "All" ? "btn-active" : ""
                }`}
                onClick={restoreAllProducts}
                type="radio"
                name="options"
              >
                Todos
              </button>
              <button
                className={`btn join-item btn-error${
                  selectedCategory === "Almacenamiento" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Almacenamiento")}
                type="radio"
                name="options"
              >
                Almacenamiento
              </button>
              <button
                className={`btn join-item btn-error${
                  selectedCategory === "Case" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Case")}
                type="radio"
                name="options"
              >
                Case
              </button>
              <button
                className={`btn join-item btn-error ${
                  selectedCategory === "Coolers" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Coolers")}
                type="radio"
                name="options"
              >
                Cooler
              </button>
              <button
                className={`btn join-item btn-error ${
                  selectedCategory === "Fuentes" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Fuentes")}
                type="radio"
                name="options"
              >
                Fuente{" "}
              </button>
              <button
                className={`btn join-item btn-error ${
                  selectedCategory === "Monitores" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Monitores")}
                type="radio"
                name="options"
              >
                Monitor{" "}
              </button>
              <button
                className={`btn join-item btn-error${
                  selectedCategory === "Periféricos" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Periféricos")}
                type="radio"
                name="options"
              >
                Periféricos
              </button>
              <button
                className={`btn join-item btn-error ${
                  selectedCategory === "Placas Madre" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Placas Madre")}
                type="radio"
                name="options"
              >
                Placa Madre
              </button>
              <button
                className={`btn join-item btn-error ${
                  selectedCategory === "Procesador" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Procesador")}
                type="radio"
                name="options"
              >
                {" "}
                Procesador
              </button>
              <button
                className={`btn join-item btn-error ${
                  selectedCategory === "Ram" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Ram")}
                type="radio"
                name="options"
              >
                Ram
              </button>
              <button
                className={`btn join-item btn-error ${
                  selectedCategory === "Tarjeta de video" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Tarjeta de video")}
                type="radio"
                name="options"
              >
                {" "}
                Tarjeta de Video
              </button>
              <button
                className={`btn join-item btn-error${
                  selectedCategory === "Varios" ? "btn-active" : ""
                }`}
                onClick={() => filterProductsByCategory("Varios")}
                type="radio"
                name="options"
              >
                {" "}
                Varios
              </button>
            </div>
          </div>
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              {products.map((producto) => {
                if (selectedCategory === "All") {
                  if (
                    producto &&
                    producto.subcategoria &&
                    producto.subcategoria.attributes &&
                    categories &&
                    isInCategory(
                      searchCategory(
                        categories,
                        producto.subcategoria.attributes.subc_nombre
                      ),
                      "Accesorios"
                    )
                  ) {
                    return (
                      <div
                        className="card w-full sm:w-80 bg-base-100 shadow-xl p-4"
                        key={producto.id}
                      >
                        <figure className="w-auto h-60 sm:w-full sm:h-80 flex items-center justify-center">
                          <img
                            src={getProductImages(producto.imagen_perfil)}
                            alt={producto.nombre}
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
                } else if (
                  producto &&
                  producto.subcategoria &&
                  producto.subcategoria.attributes &&
                  categories &&
                  isInCategory(
                    searchCategory(
                      categories,
                      producto.subcategoria.attributes.subc_nombre
                    ),
                    "Accesorios"
                  ) &&
                  producto.subcategoria.attributes.subc_nombre ==
                    selectedCategory
                ) {
                  return (
                    <div
                      className="card w-full sm:w-80 bg-base-100 shadow-xl p-4"
                      key={producto.id}
                    >
                      <figure className="w-auto h-60 sm:w-full sm:h-80 flex items-center justify-center">
                        <img
                          src={getProductImages(producto.imagen_perfil)}
                          alt={producto.nombre}
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
