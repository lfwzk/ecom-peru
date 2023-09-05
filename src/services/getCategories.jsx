import env from "../env/main.js";

export async function getCategories() {
  const res = await fetch(
    `${env.api}/productos?populate[categoria][fields][0]=cate_nombre&populate[prod_imagen][fields][0]=url`
  );

  if (!res.ok) {
    throw new Error("Algo salió mal");
  }
  const { data } = await res.json();

  return data.map(({ attributes, id }) => {
    const {
      prod_nombre: nombre,
      prod_descripcion: descripcion,
      prod_preciomenor: precio,
    } = attributes;
    const { data: imagenes } = attributes.prod_imagen;
    const categoria = attributes.cate_nombre
      ? attributes.cate_nombre.data
      : null;
    return { id, nombre, descripcion, precio, imagenes, categoria };
  });
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
