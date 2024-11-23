

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/order/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.60f8b5c4.js","_app/immutable/chunks/index.be168972.js","_app/immutable/chunks/stores.86dd6d1a.js","_app/immutable/chunks/singletons.fba6038d.js","_app/immutable/chunks/index.aab50eec.js","_app/immutable/chunks/stores.deb84a51.js"];
export const stylesheets = [];
export const fonts = [];
