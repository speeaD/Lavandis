

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.53a48460.js","_app/immutable/chunks/index.be168972.js","_app/immutable/chunks/stores.86dd6d1a.js","_app/immutable/chunks/singletons.fba6038d.js","_app/immutable/chunks/index.aab50eec.js"];
export const stylesheets = [];
export const fonts = [];
