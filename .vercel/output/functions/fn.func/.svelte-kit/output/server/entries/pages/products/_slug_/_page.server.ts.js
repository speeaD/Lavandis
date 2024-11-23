import { e as error } from "../../../../chunks/index.js";
const load = async ({ params, locals }) => {
  try {
    const productRecord = await locals.pb.collection("products").getFirstListItem(`slug="${params.slug}"`, {
      expand: "related_products"
    });
    return structuredClone(productRecord);
  } catch (e) {
    console.log(`Couldnt load page /shop/${params.slug}`);
    throw error(500, {
      message: "Couldnt load this page"
    });
  }
};
export {
  load
};
