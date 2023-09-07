import env from "../env/main.js";

export async function getProducts(id) {
  const url = id
    ? `${env.api}/productos/${id}?populate[categoria][fields][0]=cate_nombre&populate[prod_imagen_perfil][fields][0]=url&populate[prod_imagen_camara][fields][0]=url`
    : `${env.api}/productos?populate[categoria][fields][0]=cate_nombre&populate[prod_imagen_perfil][fields][0]=url&populate[prod_imagen_camara][fields][0]=url`;

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
        prod_preciomenor: preciomenor,
        prod_preciomayor: preciomayor,
        prod_condicion: condicion,
        prod_modelo: modelo,
        prod_cantidad: cantidad,
        prod_descuentos: descuentos,
      } = attributes;
      const { data: imagen_perfil } = attributes.prod_imagen_perfil;
      const { data: imagen_camara } = attributes.prod_imagen_camara;
      const { data: categoria } = attributes.categoria;
      return {
        id,
        nombre,
        descripcion,
        preciomenor,
        preciomayor,
        imagen_perfil,
        imagen_camara,
        categoria,
        condicion,
        modelo,
        cantidad,
        descuentos,
      };
    });
  } else if (data) {
    // Si no es un arreglo, puedes manejarlo como un solo objeto
    const { attributes, id } = data;
    const {
      prod_nombre: nombre,
      prod_descripcion: descripcion,
      prod_preciomenor: preciomenor,
      prod_preciomayor: preciomayor,
      prod_condicion: condicion,
      prod_modelo: modelo,
      prod_cantidad: cantidad,
      prod_descuentos: descuentos,
    } = attributes;
    const { data: imagen_perfil } = attributes.prod_imagen_perfil;
    const { data: imagen_camara } = attributes.prod_imagen_camara;
    const { data: categoria } = attributes.categoria;
    return {
      id,
      nombre,
      descripcion,
      preciomenor,
      preciomayor,
      imagen_perfil,
      imagen_camara,
      categoria,
      condicion,
      modelo,
      cantidad,
      descuentos,
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
