import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../chunks/index3.js";
import "easy-reactive";
import { P as ProductItem } from "../../chunks/ProductItem.js";
import { P as PUBLIC_POCKETBASE_URL } from "../../chunks/public.js";
const Dot_svelte_svelte_type_style_lang = "";
const Dots_svelte_svelte_type_style_lang = "";
const Arrow_svelte_svelte_type_style_lang = "";
const Progress_svelte_svelte_type_style_lang = "";
const Carousel_svelte_svelte_type_style_lang = "";
const Carousel_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { banners } = $$props;
  if ($$props.banners === void 0 && $$bindings.banners && banners !== void 0)
    $$bindings.banners(banners);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="w-full aspect-[1.9/3] md:aspect-[16/7.7]">${``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let showcase = data.showcase;
  let banners = data.carousels;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-7uj384_START -->${$$result.title = `<title>Lavandis</title>`, ""}<!-- HEAD_svelte-7uj384_END -->`, ""}

${banners.length !== 0 ? `${validate_component(Carousel_1, "Carousel").$$render($$result, { banners }, {}, {})}` : ``}

<div class="mx-3 md:mx-10"><section class="text-gray-800 text-center lg:text-left lg:px-32 lg:py-5"><div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center"><div class="mb-6 lg:mb-0"><h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">Lavandis<br>Pro-care
				</h1></div>
			<div class="mb-6 lg:mb-0 flex flex-col justify-center"><p class="text-gray-500 text-lg">Born out of a shared love of good design &amp; quality products, we create considered
					solutions fit for the modern lifestyle. Always driven by passion, we work to empower
					others to live the same way.
				</p></div></div></section>

	${each(showcase, (showsection) => {
    return `<h2 class="text-center font-extrabold text-6xl pt-20 pb-12 uppercase">${escape(showsection.name)}</h2>

		<div class="grid gap-12 grid-cols-2 lg:grid-cols-4">${each(showsection.expand.products, (product) => {
      return `${validate_component(ProductItem, "ProductItem").$$render(
        $$result,
        {
          title: product.name,
          image: PUBLIC_POCKETBASE_URL + "/api/files/" + product.collectionName + "/" + product.id + "/" + product.images[0],
          hoverImage: product.images.length > 1 ? `${PUBLIC_POCKETBASE_URL}/api/files/${product.collectionName}/${product.id}/${product.images[1]}` : "",
          price: product.price,
          salePrice: product.sale_price,
          link: "/products/" + product.slug
        },
        {},
        {}
      )}`;
    })}
		</div>`;
  })}</div>
<br><br>`;
});
export {
  Page as default
};
