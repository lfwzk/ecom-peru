import env from "../env/main.js";

export async function getProducts(id) {
  const url = id
    ? `${env.api}/productos/${id}?populate=categoria&populate=prod_imagen_perfil&populate=prod_imagen_camara`
    : `${env.api}/productos?populate=categoria&populate=prod_imagen_perfil&populate=prod_imagen_camara&populate=Descuentos`;

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
      const { data: categoria } = attributes.categoria;

      // Ahora maneja los descuentos si están presentes
      let descuentos = [];

      if (Array.isArray(attributes.Descuentos)) {
        descuentos = attributes.Descuentos.map(({ attributes }) => ({
          fecha_inicio: attributes.fecha_inicio,
          fecha_fin: attributes.fecha_fin,
          valor: attributes.valor,
          tipo_descuento: attributes.tipo_descuento,
        }));
      }

      // Obtenemos la fecha de finalización de la oferta
      const fechaFinalOferta = new Date(attributes.fecha_final_oferta);
      const fechaActual = new Date();

      // Calculamos la diferencia en milisegundos
      const diferenciaMilisegundos = fechaFinalOferta - fechaActual;

      // Calculamos días, horas, minutos y segundos
      const segundosTotales = Math.floor(diferenciaMilisegundos / 1000);
      const dias = Math.floor(segundosTotales / (3600 * 24));
      const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
      const minutos = Math.floor((segundosTotales % 3600) / 60);
      const segundos = segundosTotales % 60;
      return {
        id,
        nombre,
        descripcion,
        precio,

        imagen_perfil,
        imagen_camara,
        categoria,
        condicion,
        modelo,
        cantidad,
        descuentos,
        tiempoRestante: {
          dias,
          horas,
          minutos,
          segundos,
        },
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
      prod_descuentos: descuentos,
    } = attributes;
    const { data: imagen_perfil } = attributes.prod_imagen_perfil;
    const { data: imagen_camara } = attributes.prod_imagen_camara;
    const { data: categoria } = attributes.categoria;

    // Obtenemos la fecha de finalización de la oferta
    const fechaFinalOferta = new Date(data.attributes.fecha_final_oferta);
    const fechaActual = new Date();

    // Calculamos la diferencia en milisegundos
    const diferenciaMilisegundos = fechaFinalOferta - fechaActual;

    // Calculamos días, horas, minutos y segundos
    const segundosTotales = Math.floor(diferenciaMilisegundos / 1000);
    const dias = Math.floor(segundosTotales / (3600 * 24));
    const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;
    return {
      id,
      nombre,
      descripcion,
      precio,
      imagen_perfil,
      imagen_camara,
      categoria,
      condicion,
      modelo,
      cantidad,
      descuentos,
      tiempoRestante: {
        dias,
        horas,
        minutos,
        segundos,
      },
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
