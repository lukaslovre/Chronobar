import { findByName } from "$lib/menuData";

export function load({ params }) {
  // get the [slug] from the URL
  const { slug } = params;

  const item = findByName(slug);

  return {
    item,
  };
}
