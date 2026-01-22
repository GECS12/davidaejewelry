import { defineQuery } from "next-sanity";

export const PRODUCTS_QUERY = defineQuery(`*[_type == "product" && defined(slug.current)] {
  _id,
  name,
  "slug": slug.current,
  price,
  category,
  mainImage,
  images,
  description,
  details,
  available
}`);

export const PRODUCT_BY_SLUG_QUERY = defineQuery(`*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  price,
  category,
  mainImage,
  images,
  description,
  details,
  available
}`);
