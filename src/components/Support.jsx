import React from 'react';
import img1 from "../components/images/icons/shipping1.png"
import img2 from "../components/images/icons/shipping2.png"
import img3 from "../components/images/icons/shipping3.png"
import img4 from "../components/images/icons/shipping4.png"

export const Support = () => {
  return (
    <div className="p-10 text-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <img src={img1} alt="Envios A todo el Peru" className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto" />
          <p className="text-center">Envios A todo el Peru</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img2} alt="Soporte 24/7" className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto" />
          <p className="text-center">Soporte 24/7</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img3} alt="Garantia de 1 año" className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto" />
          <p className="text-center">Garantia de 1 año</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img4} alt="Pago seguro" className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto" />
          <p className="text-center">Pago seguro</p>
        </div>
      </div>
    </div>
  );
};
