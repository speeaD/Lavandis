

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.29bf9f5a.js","_app/immutable/chunks/index.be168972.js","_app/immutable/chunks/stores.69b3d4be.js","_app/immutable/chunks/singletons.bf4b1c45.js","_app/immutable/chunks/index.aab50eec.js"];
export const stylesheets = [];
export const fonts = [];
