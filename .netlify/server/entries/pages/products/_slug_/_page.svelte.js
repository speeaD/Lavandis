import { c as create_ssr_component, d as add_attribute, e as escape, b as each, f as compute_rest_props, v as validate_component, m as missing_component, g as getContext, h as createEventDispatcher, s as setContext } from "../../../../chunks/index3.js";
import { P as PUBLIC_POCKETBASE_URL } from "../../../../chunks/public.js";
import "../../../../chunks/stores.js";
/* empty css                                                              */import { Slugger, Lexer } from "marked";
import { P as ProductItem } from "../../../../chunks/ProductItem.js";
const css$1 = {
  code: "input.svelte-1x4di1c::-webkit-outer-spin-button,input.svelte-1x4di1c::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type='number'].svelte-1x4di1c{-moz-appearance:textfield;appearance:textfield}",
  map: null
};
const QuantityInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { count = 1 } = $$props;
  let { mini = false } = $$props;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0)
    $$bindings.mini(mini);
  $$result.css.add(css$1);
  return `<div${add_attribute("class", mini ? "w-24" : "w-44", 0)}><div class="${"flex w-full h-full " + escape(mini ? "" : "py-3", true) + " border-2"}"><input type="button" value="-" class="${"cursor-pointer font-semibold " + escape(mini ? "text-xl" : "text-2xl", true) + " h-full w-20 svelte-1x4di1c"}">
		<input type="number" aria-label="Quantity" step="1" min="1" class="${"text-center " + escape(mini ? "text-lg" : "text-xl", true) + " w-full outline-none svelte-1x4di1c"}"${add_attribute("value", count, 0)}>
		<input type="button" value="+" class="${"cursor-pointer font-semibold " + escape(mini ? "text-xl" : "text-2xl", true) + " h-full w-20 svelte-1x4di1c"}"></div>
</div>`;
});
const ImageGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { productId } = $$props;
  let { images } = $$props;
  let { alt_text } = $$props;
  let original_image = images[0];
  let active_image = images[0];
  function generateStyle(src) {
    return src === active_image ? "outline outline-2" : "";
  }
  if ($$props.productId === void 0 && $$bindings.productId && productId !== void 0)
    $$bindings.productId(productId);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.alt_text === void 0 && $$bindings.alt_text && alt_text !== void 0)
    $$bindings.alt_text(alt_text);
  {
    {
      if (original_image !== images[0]) {
        active_image = images[0];
        original_image = images[0];
      }
    }
  }
  return `<div class="flex flex-col gap-5"><img class="w-full" src="${escape(PUBLIC_POCKETBASE_URL, true) + "/api/files/products/" + escape(productId, true) + "/" + escape(active_image, true)}" width="700" height="700"${add_attribute("alt", alt_text, 0)}>

	<div class="grid gap-3 grid-cols-2 lg:grid-cols-4">${each(images, (image) => {
    return `<button><img${add_attribute("class", generateStyle(image), 0)} src="${escape(PUBLIC_POCKETBASE_URL, true) + "/api/files/products/" + escape(productId, true) + "/" + escape(image, true)}" width="700" height="700"${add_attribute("alt", alt_text, 0)}>
			</button>`;
  })}</div></div>`;
});
function supressWarnings() {
  const origWarn = console.warn;
  console.warn = (message) => {
    if (message.includes("unknown prop"))
      return;
    if (message.includes("unexpected slot"))
      return;
    origWarn(message);
  };
}
const Parser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "tokens", "header", "rows", "ordered", "renderers"]);
  let { type = void 0 } = $$props;
  let { tokens = void 0 } = $$props;
  let { header = void 0 } = $$props;
  let { rows = void 0 } = $$props;
  let { ordered = false } = $$props;
  let { renderers } = $$props;
  supressWarnings();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  return `${!type ? `${each(tokens, (token) => {
    return `${validate_component(Parser, "svelte:self").$$render($$result, Object.assign({}, token, { renderers }), {}, {})}`;
  })}` : `${renderers[type] ? `${type === "table" ? `${validate_component(renderers.table || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(renderers.tablehead || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
            default: () => {
              return `${each(header, (headerItem, i) => {
                return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                  $$result,
                  {
                    header: true,
                    align: $$restProps.align[i] || "center"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: headerItem.tokens, renderers }, {}, {})}
              `;
                    }
                  }
                )}`;
              })}`;
            }
          })}`;
        }
      })}
        ${validate_component(renderers.tablebody || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${each(rows, (row) => {
            return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
              default: () => {
                return `${each(row, (cells, i) => {
                  return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                    $$result,
                    {
                      header: false,
                      align: $$restProps.align[i] || "center"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: cells.tokens, renderers }, {}, {})}
                `;
                      }
                    }
                  )}`;
                })}
            `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}` : `${type === "list" ? `${ordered ? `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({}, { ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.orderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign({}, item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `;
          }
        })}`;
      })}`;
    }
  })}` : `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({}, { ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.unorderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign({}, item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `;
          }
        })}`;
      })}`;
    }
  })}`}` : `${validate_component(renderers[type] || missing_component, "svelte:component").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${tokens ? `${validate_component(Parser, "svelte:self").$$render($$result, { tokens, renderers }, {}, {})}` : `${escape($$restProps.raw)}`}`;
    }
  })}`}`}` : ``}`}`;
});
const key = {};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let { depth } = $$props;
  let { raw } = $$props;
  let { text } = $$props;
  const { slug, getOptions } = getContext(key);
  const options = getOptions();
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
    $$bindings.depth(depth);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  id = options.headerIds ? options.headerPrefix + slug(text) : void 0;
  return `${depth === 1 ? `<h1${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${depth === 2 ? `<h2${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${depth === 3 ? `<h3${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${depth === 4 ? `<h4${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${depth === 5 ? `<h5${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${depth === 6 ? `<h6${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${escape(raw)}`}`}`}`}`}`}`;
});
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>${slots.default ? slots.default({}) : ``}</p>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { raw } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  let { text = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<img${add_attribute("src", href, 0)}${add_attribute("title", title, 0)}${add_attribute("alt", text, 0)}>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", href, 0)}${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<em>${slots.default ? slots.default({}) : ``}</em>`;
});
const Del = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<del>${slots.default ? slots.default({}) : ``}</del>`;
});
const Codespan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { raw } = $$props;
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `<code>${escape(raw.replace(/`/g, ""))}</code>`;
});
const Strong = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<strong>${slots.default ? slots.default({}) : ``}</strong>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<table>${slots.default ? slots.default({}) : ``}</table>`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<thead>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tbody>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tr>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { align } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  return `${header ? `<th${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</th>` : `<td${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ordered } = $$props;
  let { start } = $$props;
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  return `${ordered ? `<ol${add_attribute("start", start, 0)}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
});
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  let { text } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<pre${add_attribute("class", lang, 0)}><code>${escape(text)}</code></pre>`;
});
const Br = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<br>${slots.default ? slots.default({}) : ``}`;
});
const defaultRenderers = {
  heading: Heading,
  paragraph: Paragraph,
  text: Text,
  image: Image,
  link: Link,
  em: Em,
  strong: Strong,
  codespan: Codespan,
  del: Del,
  table: Table,
  tablehead: TableHead,
  tablebody: TableBody,
  tablerow: TableRow,
  tablecell: TableCell,
  list: List,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: ListItem,
  hr: Hr,
  html: Html,
  blockquote: Blockquote,
  code: Code,
  br: Br
};
const defaultOptions = {
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  renderer: null,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  xhtml: false
};
const SvelteMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let preprocessed;
  let slugger;
  let combinedOptions;
  let combinedRenderers;
  let { source = [] } = $$props;
  let { renderers = {} } = $$props;
  let { options = {} } = $$props;
  let { isInline = false } = $$props;
  const dispatch = createEventDispatcher();
  let tokens;
  let lexer;
  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : "",
    getOptions: () => combinedOptions
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
    $$bindings.isInline(isInline);
  preprocessed = Array.isArray(source);
  slugger = source ? new Slugger() : void 0;
  combinedOptions = { ...defaultOptions, ...options };
  {
    if (preprocessed) {
      tokens = source;
    } else {
      lexer = new Lexer(combinedOptions);
      tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
      dispatch("parsed", { tokens });
    }
  }
  combinedRenderers = { ...defaultRenderers, ...renderers };
  return `${validate_component(Parser, "Parser").$$render($$result, { tokens, renderers: combinedRenderers }, {}, {})}`;
});
const ProductDetails_svelte_svelte_type_style_lang = "";
const css = {
  code: "#markdown-container h1{font-size:2.25rem;line-height:2.5rem;font-weight:700}#markdown-container h2{font-size:1.875rem;line-height:2.25rem;font-weight:700}#markdown-container h3{font-size:1.5rem;line-height:2rem;font-weight:700}#markdown-container ul{list-style-type:disc;list-style-position:inside}",
  map: null
};
const ProductDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source = "" } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  $$result.css.add(css);
  return `<div class="flex flex-col space-y-4 pb-10 basis-2/3" id="markdown-container">${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let original_data = data;
  let product = data;
  let quantity = 1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (original_data !== data) {
          product = data;
          product.images = product.images;
          quantity = 1;
          original_data = data;
        }
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-rgzp6j_START -->${$$result.title = `<title>${escape(product.name)} | SwiftMarket</title>`, ""}<!-- HEAD_svelte-rgzp6j_END -->`, ""}

<div class="flex flex-col mx-3 py-10 gap-5 lg:mx-10 lg:flex-row lg:gap-8"><div class="basis-1/2 px-8">${validate_component(ImageGallery, "ImageGallery").$$render(
      $$result,
      {
        productId: product.id,
        images: product.images,
        alt_text: product.name
      },
      {},
      {}
    )}</div>
	<div class="basis-1/2 flex flex-col gap-8 px-8"><h1 class="font-extrabold text-4xl mt-3">${escape(product.name)}</h1>
		<div class="flex items-end gap-2">${product.sale_price === 0 ? `<span class="text-3xl">$${escape(product.price)}</span>` : `<span class="text-3xl text-red-600">$${escape(product.sale_price)}</span>
				<span class="text-xl text-gray-600 line-through">$${escape(product.price)}</span>`}</div>

		<div class="flex flex-col gap-2"><p>Description</p>
			<p class="text-gray-600">${escape(product.description)}</p></div>

		<div class="flex flex-col gap-2"><p>Quantity</p>
			${validate_component(QuantityInput, "QuantityInput").$$render(
      $$result,
      { count: quantity },
      {
        count: ($$value) => {
          quantity = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
		<button class="w-full h-12 px-6 text-black font-bold transition-colors duration-150 bg-yellow-300 focus:shadow hover:bg-yellow-500">Add to cart
		</button></div></div>

<div class="flex flex-col-reverse px-10 gap-20 lg:flex-row">${product.details.length !== 0 ? `${validate_component(ProductDetails, "ProductDetails").$$render($$result, { source: product.details }, {}, {})}` : ``}

	${product.related_products.length !== 0 ? `<div class="basis-1/2"><p class="font-medium text-lg uppercase">Related</p>

			<div class="grid gap-12 pr-5 py-5 grid-cols-2">${each(product.expand.related_products, (relatedProduct) => {
      return `${validate_component(ProductItem, "ProductItem").$$render(
        $$result,
        {
          title: relatedProduct.name,
          image: PUBLIC_POCKETBASE_URL + "/api/files/" + relatedProduct.collectionName + "/" + relatedProduct.id + "/" + relatedProduct.images[0],
          hoverImage: relatedProduct.images.length > 1 ? `${PUBLIC_POCKETBASE_URL}/api/files/${relatedProduct.collectionName}/${relatedProduct.id}/${relatedProduct.images[1]}` : "",
          price: relatedProduct.price,
          salePrice: relatedProduct.sale_price,
          link: "/products/" + relatedProduct.slug
        },
        {},
        {}
      )}`;
    })}</div></div>` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
