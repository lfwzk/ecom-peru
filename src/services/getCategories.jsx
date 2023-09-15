import env from "../env/main.js";

export async function getCategories() {
  const res = await fetch(
    `${env.api}/categorias?populate[subcategorias][fields][0]=subc_nombre`
  );
  if (!res.ok) {
    throw new Error("Algo salió mal");
  }
  const { data } = await res.json();
  if (Array.isArray(data)) {
    return data.map(({ attributes, id }) => {
      const {
        cate_nombre: nombre,
        cate_descripcion: descripcion,
      } = attributes;
      const { data: subcategorias } = attributes.subcategorias;
      return {
        id,
        nombre,
        descripcion,
        subcategorias,
      };
    });
  } else if (data) {
    const { attributes, id } = data;
    const {
      cate_nombre: nombre,
      cate_descripcion: descripcion,
    } = attributes;
    const { data: subcategorias } = attributes.subcategorias;
    return {
      id,
      nombre,
      descripcion,
      subcategorias,
    };
  } else {
    throw new Error("No se encontraron productos");
  }
}

export function searchCategory(categories, subcategory) {
  const categoriaEnc = categories?.find(c => (c.subcategorias?.find((sc) => (sc.attributes?.subc_nombre == subcategory))));
  if (categoriaEnc)
    return categoriaEnc.nombre;
  else
    return 'sin categoría';
}

export function isInCategory(categoria, value) {
  return categoria == value;
}
