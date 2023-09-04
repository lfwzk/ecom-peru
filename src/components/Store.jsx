import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import backend from "../env/main";

export const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${backend}/productos`);
      const data = await response.json();

      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <section className="py-6 dark:bg-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {/* -------------------------------------------------------- */}
            {products.map((producto) => (
              <div className="card w-full sm:w-80 bg-base-100 shadow-xl p-4">
                <figure className="w-auto h-60 sm:w-full sm:h-80 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Shoes"
                    className="square-image"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {producto.prod_nombre}
                    <div className="badge badge-secondary">nuevo</div>
                  </h2>
                  <p className="text-lg">BoB. {producto.prod_preciomenor}</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-red-500 text-white">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* -------------------------------------------------------- */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
