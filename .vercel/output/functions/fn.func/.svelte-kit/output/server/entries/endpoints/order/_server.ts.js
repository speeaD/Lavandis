import { j as json } from "../../../chunks/index.js";
import PocketBase from "pocketbase";
import { P as PUBLIC_POCKETBASE_URL } from "../../../chunks/public.js";
const POST = async ({ request }) => {
  const products = await request.json();
  const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
  await Promise.all(
    products.map(async (product) => {
      const item = await pb.collection("products").getOne(product.id);
      const finalPrice = item.sale_price === 0 ? item.price : item.sale_price;
      const roundedNumber = Number(Math.round(parseFloat(finalPrice * 100 + "e2")) + "e-2");
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [`${PUBLIC_POCKETBASE_URL}/api/files/products/${item.id}/${item.images[0]}`]
          },
          unit_amount: roundedNumber
        },
        quantity: product.quantity
      };
    })
  );
  try {
    return json({ stripeSession: {} });
  } catch (err) {
    console.log(err);
    return new Response(null);
  }
};
export {
  POST
};
