import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.1ecb9f08.js","_app/immutable/chunks/index.be168972.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/public.4b22fb98.js","_app/immutable/chunks/ProductItem.9e905778.js"];
export const stylesheets = ["_app/immutable/assets/2.f76ac12e.css"];
export const fonts = [];
