import { c as create_ssr_component, d as add_attribute, e as escape } from "./index3.js";
const ProductItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { image } = $$props;
  let { hoverImage = "" } = $$props;
  let { price } = $$props;
  let { salePrice = 0 } = $$props;
  let { link } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.hoverImage === void 0 && $$bindings.hoverImage && hoverImage !== void 0)
    $$bindings.hoverImage(hoverImage);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.salePrice === void 0 && $$bindings.salePrice && salePrice !== void 0)
    $$bindings.salePrice(salePrice);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<div class="flex flex-col justify-center items-center"><a class="aspect-square block mb-6"${add_attribute("href", link, 0)}><img class="object-cover aspect-square" width="700" height="700" loading="lazy"${add_attribute("src", image, 0)} alt="${escape(title, true) + " image"}"></a>
	<div class="flex flex-col justify-start flex-grow text-center leading-tight gap-1"><a${add_attribute("href", link, 0)}>${escape(title)}</a>
		<div class="flex justify-center gap-3">${salePrice === 0 ? `<span>$${escape(price)}</span>` : `<span class="text-red-600">$${escape(salePrice)}</span>
				<span class="text-gray-600 line-through">$${escape(price)}</span>`}</div></div></div>`;
});
export {
  ProductItem as P
};
