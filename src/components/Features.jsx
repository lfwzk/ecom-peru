import React from "react";

export const Features = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-red-500  rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-white sm:text-3xl">
                    Nuestros productos
                  </h2>

                  <p className="mt-4 text-white">
                    Nuestros productos son de la mejor calidad, con garantia de
                    1 año. tambien contamos con envios a todo el peru.
                  </p>
                </header>

                <a
                  href="/product"
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                >
                  COMPRAR
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="block group">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      className="object-cover w-full rounded aspect-square rounded-md"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                        Computadoras
                      </h3>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="block group">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      className="object-cover w-full rounded aspect-square rounded-md"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                        Accesorios
                      </h3>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
