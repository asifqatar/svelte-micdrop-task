

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/daily/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CTghCYBD.js","_app/immutable/chunks/scheduler.CiCf2nRa.js","_app/immutable/chunks/index.DcvOW0q_.js","_app/immutable/chunks/DailyView.v4enCgez.js","_app/immutable/chunks/each.CyCXCkPQ.js","_app/immutable/chunks/Badge.DIHtCMTo.js","_app/immutable/chunks/utils.yyebEQUV.js","_app/immutable/chunks/Button.D8-PHq6M.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/add-main-blue.CUDgM8JI.js","_app/immutable/chunks/toDate.qOSwr3PX.js"];
export const stylesheets = ["_app/immutable/assets/DailyView.X4LvFCVw.css","_app/immutable/assets/Badge.BXSPxP5Q.css","_app/immutable/assets/Button.wNd4sLP4.css"];
export const fonts = [];
