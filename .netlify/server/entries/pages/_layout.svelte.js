import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/index3.js";
import "@svelte-put/clickoutside";
import { c as cartItemsStore } from "../../chunks/stores.js";
/* empty css                                                        */const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cartItemsStore, $$unsubscribe_cartItemsStore;
  $$unsubscribe_cartItemsStore = subscribe(cartItemsStore, (value) => $cartItemsStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<nav class="sticky top-0 z-10 bg-[#282828] text-white"><div class="max-w-7xl mx-auto"><div class="flex justify-between items-center py-4"><div><a class="mx-5 font-extrabold text-xl" href="/">Lavandis</a></div>
			<div class="flex items-center gap-6 m-auto"><a class="hover:underline underline-offset-4" href="/shop/all">Shop</a>
				<a class="hover:underline underline-offset-4" href="#!">Blog</a></div>
			<div class="flex mx-5 gap-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
				<button class="relative" aria-label="Cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
					${$cartItemsStore.length !== 0 ? `<span class="absolute inset-0 object-right-top ml-3"><div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">${escape($cartItemsStore.length)}</div></span>` : ``}</button></div></div></div></nav>

${``}`;
  } while (!$$settled);
  $$unsubscribe_cartItemsStore();
  return $$rendered;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="text-center lg:text-left bg-gray-100 text-gray-600"><div class="mx-6 py-10 text-center md:text-left"><div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div><h1 class="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">Lavandis Lux Lifestyle
				</h1>
				</div>
			<div><h1 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">Shop</h1>
				<p class="mb-4"><a href="/shop/product1" class="text-gray-600">Household Items</a></p>
				<p class="mb-4"><a href="/shop/product2" class="text-gray-600">Interior Decorations</a></p>
				<p class="mb-4"><a href="/shop/product1" class="text-gray-600">Men Fashion wears</a></p>
				<p class="mb-4"><a href="/shop/product1" class="text-gray-600">Women Fashion wears</a></p>
				<p class="mb-4"><a href="/shop/product2" class="text-gray-600">Accessories</a></p></div>
			<div><h1 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">About</h1>
				<p class="mb-4"><a href="#!" class="text-gray-600">Blog</a></p>
				<p><a href="#!" class="text-gray-600">FAQ</a></p></div>
			<div><h1 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">Contact</h1>
				<p class="flex items-center justify-center md:justify-start mb-4"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
					24, Western Foreshore, Lekki, Eti-osa, Lagos
				</p>
				<p class="flex items-center justify-center md:justify-start mb-4"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
					lavandisprocare@gmail.com
				</p>
				<p class="flex items-center justify-center md:justify-start mb-4"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
					+234 808 040 8838
				</p></div></div></div>
	<div class="text-center p-6 bg-gray-200"><a href="https://github.com/SwiftMarket">© 2024, Lavandis Lux Lifestyle</a></div></footer>`;
});
const index = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-q7qx2t_START -->${$$result.title = `<title>Lavandis</title>`, ""}<meta name="description" content=""><!-- HEAD_svelte-q7qx2t_END -->`, ""}

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
