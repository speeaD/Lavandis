

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.27d64049.js","_app/immutable/chunks/index.be168972.js","_app/immutable/chunks/stores.08cfa6ea.js","_app/immutable/chunks/singletons.38524d6f.js","_app/immutable/chunks/index.aab50eec.js"];
export const stylesheets = [];
export const fonts = [];
