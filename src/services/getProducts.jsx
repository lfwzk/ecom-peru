import env from "../env/main.js";

export async function getProducts(id) {
  const url = id
    ? `${env.api}/productos/${id}?populate[categoria][fields][0]=cate_nombre&populate[prod_imagen][fields][0]=url`
    : `${env.api}/productos?populate[categoria][fields][0]=cate_nombre&populate[prod_imagen][fields][0]=url`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Algo salió mal");
  }

  const { data } = await res.json();

  if (Array.isArray(data)) {
    return data.map(({ attributes, id }) => {
      const {
        prod_nombre: nombre,
        prod_descripcion: descripcion,
        prod_preciomenor: precio,
      } = attributes;
      const { data: imagenes } = attributes.prod_imagen;
      const { data: categoria } = attributes.categoria;
      return { id, nombre, descripcion, precio, imagenes, categoria };
    });
  } else if (data) {
    const { attributes } = data;
    const {
      prod_nombre: nombre,
      prod_descripcion: descripcion,
      prod_preciomenor: precio,
    } = attributes;
    const { data: imagenes } = attributes.prod_imagen;
    const { data: categoria } = attributes.categoria;
    return { id, nombre, descripcion, precio, imagenes, categoria };
  } else {
    throw new Error("No se encontraron productos");
  }
}

export function getProductImages(data) {
  let link = "";
  let cont = false;
  data.map(({ attributes, id }) => {
    const { url } = attributes;

    if (!cont) {
      cont = true;
      link = `${env.strapi}${url}`;
    }

    //return `${env.strapi}${url}`
  });
  return link;
}
