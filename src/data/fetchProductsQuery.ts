export const productsFetchQuery = `*[_type == "product"]{
  _id,
  slug,
  tags,
  image,
  price,
  dimensions,
  quantity,
  description,
  features,
  name,
  "category": category->{
    name,
  }
}`