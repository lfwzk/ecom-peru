import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
export const Features = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-3 lg:py-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="group">
                  <a href="/computer" className="block">
                    <img
                      src={img1}
                      alt=""
                      className="object-cover w-full  aspect-square rounded-md"
                      href="/computer"
                    />
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                        Computadoras
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="group">
                  <a href="/laptop" className="block">
                    <img
                      src={img3}
                      alt=""
                      className="object-cover w-full  aspect-square rounded-md"
                      href="/laptop"
                    />
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                        Laptop
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="group">
                  <a href="/accesories" className="block">
                    <img
                      src={img2}
                      alt=""
                      className="object-cover w-full  aspect-square rounded-md"
                      href="/accesories"
                    />
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                        Accesorios
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
