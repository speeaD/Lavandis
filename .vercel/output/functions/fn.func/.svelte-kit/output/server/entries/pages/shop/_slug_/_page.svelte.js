import { c as create_ssr_component, d as add_attribute, e as escape, b as each, v as validate_component } from "../../../../chunks/index3.js";
import { P as ProductItem } from "../../../../chunks/ProductItem.js";
import { P as PUBLIC_POCKETBASE_URL } from "../../../../chunks/public.js";
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  const headingId = "head" + Math.random().toString(16).slice(2);
  const collapseId = "id" + Math.random().toString(16).slice(2);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<h2 class="mb-0"${add_attribute("id", headingId, 0)}><button class="group relative flex w-full items-center py-4 font-medium text-lg" type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="${"#" + escape(collapseId, true)}" aria-expanded="false"${add_attribute("aria-controls", collapseId, 0)}>${escape(name)}
		<span class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg></span></button></h2>
<div${add_attribute("id", collapseId, 0)} class="!visible hidden" data-te-collapse-item${add_attribute("aria-labelledby", headingId, 0)}><div class="pb-4">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products;
  let slugs;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  products = data.items;
  slugs = data.items.map((item) => item.slug);
  return `${$$result.head += `<!-- HEAD_svelte-7uj384_START -->${$$result.title = `<title>Lavandis</title>`, ""}<!-- HEAD_svelte-7uj384_END -->`, ""}

<div class="flex justify-center items-center gap-6 m-auto p-5 flex-wrap"><a class="hover:underline underline-offset-4" href="/shop/all">All</a>
	${each(slugs, (slug, index) => {
    return `${index < slugs.length - 1 ? `<span></span>` : ``}
		<a class="hover:underline underline-offset-4" href="${"/shop/" + escape(slug, true)}">${escape(products[index].name)}</a>`;
  })}</div>

<hr>

<div class="flex flex-col py-8 px-3 lg:flex-row md:px-20"><div class="mg-0 basis-1/6 flex flex-col pb-5 lg:mx-10"><h1 class="uppercase font-bold text-xl pb-4">FILTERS</h1>
		<hr>
		${validate_component(AccordionItem, "AccordionItem").$$render($$result, { name: "Price" }, {}, {
    default: () => {
      return `<p>TODO</p>`;
    }
  })}
		<hr>
		${validate_component(AccordionItem, "AccordionItem").$$render($$result, { name: "Product type" }, {}, {
    default: () => {
      return `<p>TODO</p>`;
    }
  })}
		<hr>
		${validate_component(AccordionItem, "AccordionItem").$$render($$result, { name: "Availability" }, {}, {
    default: () => {
      return `<p>TODO</p>`;
    }
  })}
		<hr></div>
	<div class="basis-5/6 flex flex-col"><div class="flex justify-between pb-4"><p>${escape(products.length)} products</p>
			<div><span class="text-gray-700">Sort by</span>
				<button>New</button></div></div>

		<div class="grid grid-cols-2 gap-5 md:grid-cols-3">${each(products, (product) => {
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
  })}</div></div></div>`;
});
export {
  Page as default
};
