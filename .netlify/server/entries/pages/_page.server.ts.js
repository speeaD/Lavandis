import { e as error } from "../../chunks/index.js";
const load = async ({ locals }) => {
  try {
    const [showcaseRecords, carouselsRecords] = await Promise.all([
      locals.pb.collection("showcase").getFullList({
        expand: "products",
        sort: "created"
      }),
      locals.pb.collection("carousels").getFullList({
        sort: "created"
      })
    ]);
    return {
      showcase: structuredClone(showcaseRecords),
      carousels: structuredClone(carouselsRecords)
    };
  } catch (e) {
    console.log(`Couldnt load page /`);
    throw error(500, {
      message: "Couldnt load this page"
    });
  }
};
export {
  load
};
