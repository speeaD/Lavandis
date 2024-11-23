

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2d1bbe2d.js","_app/immutable/chunks/index.be168972.js","_app/immutable/chunks/stores.deb84a51.js","_app/immutable/chunks/index.aab50eec.js","_app/immutable/chunks/QuantityInput.40b8b783.js","_app/immutable/chunks/public.4b22fb98.js"];
export const stylesheets = ["_app/immutable/assets/0.b305aac3.css","_app/immutable/assets/QuantityInput.a11e9662.css"];
export const fonts = ["_app/immutable/assets/nunito-sans-cyrillic-ext-wght-normal.bfdae3d5.woff2","_app/immutable/assets/nunito-sans-cyrillic-wght-normal.7b4b167b.woff2","_app/immutable/assets/nunito-sans-vietnamese-wght-normal.90a7bd47.woff2","_app/immutable/assets/nunito-sans-latin-ext-wght-normal.c1dbb40c.woff2","_app/immutable/assets/nunito-sans-latin-wght-normal.1393acc6.woff2"];
