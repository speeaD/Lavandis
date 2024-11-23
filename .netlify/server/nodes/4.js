import * as server from '../entries/pages/products/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/products/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.27042870.js","_app/immutable/chunks/index.be168972.js","_app/immutable/chunks/public.4b22fb98.js","_app/immutable/chunks/stores.deb84a51.js","_app/immutable/chunks/index.aab50eec.js","_app/immutable/chunks/QuantityInput.40b8b783.js","_app/immutable/chunks/ProductItem.9e905778.js"];
export const stylesheets = ["_app/immutable/assets/4.d855e1e6.css","_app/immutable/assets/QuantityInput.a11e9662.css"];
export const fonts = [];
