

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/order/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.380be30f.js","_app/immutable/chunks/index.be168972.js","_app/immutable/chunks/stores.08cfa6ea.js","_app/immutable/chunks/singletons.38524d6f.js","_app/immutable/chunks/index.aab50eec.js","_app/immutable/chunks/stores.deb84a51.js"];
export const stylesheets = [];
export const fonts = [];
