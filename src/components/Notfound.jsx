import React from "react";

export const Notfound = () => {
  return (
    <>
      <div className="grid h-screen px-4 bg-black place-content-center">
        <h1 className="tracking-widest text-white uppercase">
          404 | Not Found
        </h1>
        <a
          href="/
"
        >
          <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded align-center items-center">
            Regresar
          </button>
        </a>
      </div>
    </>
  );
};
