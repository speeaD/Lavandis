import * as server from '../entries/pages/shop/_slug_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shop/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/shop/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.ee0ab6d9.js","_app/immutable/chunks/index.be168972.js","_app/immutable/chunks/ProductItem.9e905778.js","_app/immutable/chunks/public.4b22fb98.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
