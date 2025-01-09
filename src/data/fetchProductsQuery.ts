export const productsFetchQuery = `*[_type == "products"]{
  src,
  title,
  price,
  description,
  slug
}`