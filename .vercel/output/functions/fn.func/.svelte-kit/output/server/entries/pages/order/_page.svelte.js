import { c as create_ssr_component, a as subscribe } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores2.js";
import { e as emptyCart } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const url = $page.url;
  let orderSuccess = url.searchParams.get("success") === "true";
  if (orderSuccess) {
    emptyCart();
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1dmkqz5_START -->${$$result.title = `<title>SwiftMarket Order</title>`, ""}<!-- HEAD_svelte-1dmkqz5_END -->`, ""}

${orderSuccess ? `<div class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg flex flex-col items-center" role="alert"><p class="p-20 font-bold text-5xl text-center">Order completed</p>
		<p class="pb-20 text-xl text-center">Thank you for your purchase! Expect us soon!</p></div>` : `<div class="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg flex flex-col items-center" role="alert"><p class="p-20 font-bold text-5xl text-center">Oh no</p>
		<p class="pb-20 text-xl text-center">Seems like something went wrong because the <b>order failed</b>...
		</p></div>`}`;
});
export {
  Page as default
};
