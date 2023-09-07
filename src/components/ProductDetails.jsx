import { Header } from "./Header";
import { Footer } from "./Footer";
import { useParams } from "react-router-dom";
import { getProducts, getProductImages } from "../services/getProducts";
import { useEffect, useState } from "react";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Estado para almacenar los datos del producto
  console.log(product);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProducts(id); // Esperar a que la promesa se resuelva
        setProduct(productData); // Actualizar el estado con los datos del producto
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct(); // Llamar a la función asincrónica para obtener el producto
  }, [id]);

  if (!product) {
    // Manejar el caso en que product aún no se ha cargado
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Header />

      <section className="py-10 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-96  ">
                  <img
                    className="object-contain w-full lg:h-full lg:w-auto"
                    src={getProductImages(product.imagen_perfil)}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {product.nombre}
                  </h2>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>$.{product.preciomenor}</span>
                    <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      $. {product.preciomayor}
                    </span>
                  </p>
                </div>

                <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                  <span className="text-base text-gray-600 dark:text-gray-400">
                    Detalles{" "}
                  </span>
                  <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">
                    {product.descripcion}
                  </p>
                </div>
                <div className="mb-6 "></div>
                <div className="flex gap-4 mb-6 ">
                  <a
                    href="WHATSAPP"
                    className="w-full px-4 py-3 text-center text-gray-100 bg-red-500 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                  >
                    COMPRAR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
