

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Dd8w0F9l.js","_app/immutable/chunks/scheduler.CiCf2nRa.js","_app/immutable/chunks/index.DcvOW0q_.js"];
export const stylesheets = [];
export const fonts = [];
