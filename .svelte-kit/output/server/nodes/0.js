

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.wwBJE9Lo.js","_app/immutable/chunks/scheduler.CiCf2nRa.js","_app/immutable/chunks/index.DcvOW0q_.js"];
export const stylesheets = ["_app/immutable/assets/0.DhECjJyl.css"];
export const fonts = [];
