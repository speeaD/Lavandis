import { e as error } from "../../../../chunks/index.js";
const load = async ({ params, locals }) => {
  try {
    if (params.slug === "all") {
      const productsRecords2 = await locals.pb.collection("products").getList(1, 50, {
        sort: "-created"
      });
      return structuredClone(productsRecords2);
    }
    const category = await locals.pb.collection("categories").getFirstListItem(`slug="${params.slug}"`);
    const productsRecords = await locals.pb.collection("products").getList(1, 50, {
      filter: `categories ~ "${category.id}"`,
      sort: "-created"
    });
    return structuredClone(productsRecords);
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
