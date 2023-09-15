import env from "../env/main.js";
import {getRemainingTime } from "./auxiliarF.jsx";

export async function getProducts(id) {
  const url = id
    ? `${env.api}/productos/${id}?populate=subcategoria&populate=prod_imagen_perfil&populate=prod_imagen_camara&populate=descuentos`
    : `${env.api}/productos?populate=subcategoria&populate=prod_imagen_perfil&populate=prod_imagen_camara&populate=descuentos`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error en la solicitud: ${res.statusText}`);
  }

  const { data } = await res.json();
  if (Array.isArray(data)) {
    return data.map(({ attributes, id }) => {
      const {
        prod_nombre: nombre,
        prod_descripcion: descripcion,
        prod_precio: precio,
        prod_condicion: condicion,
        prod_modelo: modelo,
        prod_cantidad: cantidad,
      } = attributes;

      const { data: imagen_perfil } = attributes.prod_imagen_perfil;
      const { data: imagen_camara } = attributes.prod_imagen_camara;
      const subcategoria = attributes.subcategoria?.data ?? null;
      const { descuentos } = attributes;
      const tiempoRestante = getRemainingTime(descuentos?.fecha_inicio, descuentos?.fecha_final);

      return {
        id,
        nombre,
        descripcion,
        precio,
        imagen_perfil,
        imagen_camara,
        subcategoria,
        condicion,
        modelo,
        cantidad,
        descuentos,
        tiempoRestante,
      };
    });
  } else if (data) {
    // Si no es un arreglo, puedes manejarlo como un solo objeto
    const { attributes, id } = data;
    const {
      prod_nombre: nombre,
      prod_descripcion: descripcion,
      prod_precio: precio,
      prod_condicion: condicion,
      prod_modelo: modelo,
      prod_cantidad: cantidad,
      descuentos: descuentos,
    } = attributes;
    const { data: imagen_perfil } = attributes.prod_imagen_perfil;
    const { data: imagen_camara } = attributes.prod_imagen_camara;
    const { data: subcategoria } = attributes.subcategoria;
    const tiempoRestante = getRemainingTime(descuentos?.fecha_inicio, descuentos?.fecha_final);
    return {
      id,
      nombre,
      descripcion,
      precio,
      imagen_perfil,
      imagen_camara,
      subcategoria,
      condicion,
      modelo,
      cantidad,
      descuentos,
      tiempoRestante,
    };
  } else {
    throw new Error("No se encontraron productos");
  }
}

export function getProductImages(data) {
  // let link = "";
  // let cont = false;
  // data?.map(({ attributes, id }) => {
  //   const { url } = attributes;

  //   if (!cont) {
  //     cont = true;
  //     link = `${env.strapi}${url}`;
  //   }

  //   //return `${env.strapi}${url}`
  // });
  //return link;
  return `${env.strapi}${data.attributes.url}`;
}
