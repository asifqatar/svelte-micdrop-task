import { c as create_ssr_component, h as compute_rest_props, g as getContext, v as validate_component, b as add_attribute, i as spread, k as escape_object, j as escape_attribute_value, e as escape, n as compute_slots, f as createEventDispatcher, d as each } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { W as Wrapper } from "./Wrapper.js";
import { C as Cancel, p as pdfUpload, A as AddMain } from "./pdf-upload-download.js";
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textareaClass;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "wrappedClass",
    "unWrappedClass",
    "innerWrappedClass",
    "headerClass",
    "footerClass"
  ]);
  let $$slots = compute_slots(slots);
  let { value = void 0 } = $$props;
  let { wrappedClass = "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { unWrappedClass = "p-2.5 text-sm focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { innerWrappedClass = "py-2 px-4 bg-white dark:bg-gray-800" } = $$props;
  let { headerClass = "" } = $$props;
  let { footerClass = "" } = $$props;
  const background = getContext("background");
  let wrapped;
  let wrapperClass;
  const headerCls = (header) => twMerge(
    header ? "border-b" : "border-t",
    "py-2 px-3 border-gray-200",
    background ? "dark:border-gray-500" : "dark:border-gray-600",
    header ? headerClass : footerClass
  );
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.wrappedClass === void 0 && $$bindings.wrappedClass && wrappedClass !== void 0) $$bindings.wrappedClass(wrappedClass);
  if ($$props.unWrappedClass === void 0 && $$bindings.unWrappedClass && unWrappedClass !== void 0) $$bindings.unWrappedClass(unWrappedClass);
  if ($$props.innerWrappedClass === void 0 && $$bindings.innerWrappedClass && innerWrappedClass !== void 0) $$bindings.innerWrappedClass(innerWrappedClass);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0) $$bindings.headerClass(headerClass);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0) $$bindings.footerClass(footerClass);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = twMerge(
    "w-full rounded-lg bg-gray-50",
    background ? "dark:bg-gray-600" : "dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white",
    "border border-gray-200",
    background ? "dark:border-gray-500" : "dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass);
  innerWrapperClass = twMerge(innerWrappedClass, $$slots.footer ? "" : "rounded-b-lg", $$slots.header ? "" : "rounded-t-lg");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerCls(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${escape(value || "")}</textarea>`;
        }
      })} ${$$slots.footer ? `<div${add_attribute("class", headerCls(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })} `;
});
function shapeStyle(shape) {
  switch (shape) {
    case "64x64-rounded-square":
      return `w-16 h-16 rounded-lg`;
    case "256x256-profile-photo":
      return `w-64 h-64 rounded-full`;
    case "128x128-rounded-square":
      return `w-32 h-32 rounded-lg`;
    case "fullwidth-rounded-rectangle":
      return `w-full h-32 rounded-xl`;
    case "32x32-circle":
      return `w-8 h-8 rounded-full`;
    default:
      return `w-16 h-16 rounded-lg`;
  }
}
function shapeClose(shape) {
  switch (shape) {
    case "64x64-rounded-square":
      return `top-[-5px] right-[-5px] p-1 rounded-lg`;
    case "256x256-profile-photo":
      return `top-[22px] right-[19px] p-2.5 rounded-full`;
    case "128x128-rounded-square":
      return `top-[-5px] right-[-5px] p-1 rounded-lg`;
    case "fullwidth-rounded-rectangle":
      return `top-[-5px] right-[-5px] p-1 rounded-xl`;
    case "32x32-circle":
      return `top-[-3px] right-[-3px] rounded-full`;
    default:
      return `top-[-5px] right-[-5px] p-1 rounded-full`;
  }
}
const CustomDropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { existingImages = [] } = $$props;
  let { readonly = false } = $$props;
  let { showWider = false } = $$props;
  let { shape = "default" } = $$props;
  let { label = "" } = $$props;
  let images = [];
  let videos = [];
  let pdfs = [];
  createEventDispatcher();
  if ($$props.existingImages === void 0 && $$bindings.existingImages && existingImages !== void 0) $$bindings.existingImages(existingImages);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0) $$bindings.readonly(readonly);
  if ($$props.showWider === void 0 && $$bindings.showWider && showWider !== void 0) $$bindings.showWider(showWider);
  if ($$props.shape === void 0 && $$bindings.shape && shape !== void 0) $$bindings.shape(shape);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  images = existingImages;
  return `<input type="file" accept="image/*,video/mp4,application/pdf" class="hidden" aria-label="file-input"> <div class="max-sm:w-full w-2/5"><div class="w-full flex flex-col justify-center items-start p-4 rounded-[12px] bg-white border border-BG-Secondary shadow"><p class="mb-2">${escape(label)}</p> <div class="flex w-full gap-3.5">${each(images, (image, index) => {
    return `<div${add_attribute("class", `relative shadow ${shapeStyle(shape)}`, 0)}> <img${add_attribute("src", image, 0)} alt="uploaded image"${add_attribute("class", `object-cover ${shapeStyle(shape)}`, 0)}> ${!readonly ? `<button${add_attribute("class", `${shapeClose(shape)} absolute bg-red-200 cursor-pointer`, 0)}><img${add_attribute("src", Cancel, 0)} alt="close button img"> </button>` : ``} </div>`;
  })} ${each(videos, (video, index) => {
    return `<div${add_attribute("class", `relative shadow ${shapeStyle(shape)}`, 0)}> <video${add_attribute("src", video, 0)} alt="uploaded video"${add_attribute("class", `object-cover ${shapeStyle(shape)}`, 0)}></video> ${!readonly ? `<button${add_attribute("class", `${shapeClose(shape)} absolute bg-red-200 cursor-pointer`, 0)}><img${add_attribute("src", Cancel, 0)} alt="X"> </button>` : ``} </div>`;
  })} ${each(pdfs, (pdf, index) => {
    return `<div${add_attribute("class", `relative shadow ${shapeStyle(shape)} flex justify-center items-center`, 0)}><img${add_attribute("src", pdfUpload, 0)} alt="PDF Icon"${add_attribute(
      "class",
      `"object-contain max-w-full max-h-full ${shape.includes("256x256-profile-photo") ? "rounded-full" : "p-2"}`,
      0
    )}> ${!readonly ? `<button${add_attribute("class", `${shapeClose(shape)} absolute bg-red-200 cursor-pointer`, 0)}><img${add_attribute("src", Cancel, 0)} alt="close button img"> </button>` : ``} </div>`;
  })} ${!readonly ? `<button${add_attribute("class", `flex justify-center items-center border-dashed border-2 cursor-pointer border-brand-Primary border-opacity-50 bg-BG-Secondary ${shapeStyle(shape)}`, 0)}><img${add_attribute("src", AddMain, 0)} alt="Add icon"${add_attribute("class", `${shape.includes("32x32-circle") && "p-1.5"}`, 0)}></button>` : ``} ${showWider ? `<button${add_attribute("class", `w-2/4 flex justify-center items-center border-dashed border-2 cursor-pointer border-brand-Primary border-opacity-50 bg-BG-Secondary ${shapeStyle(shape)}`, 0)}><img${add_attribute("src", AddMain, 0)} alt="Add icon"${add_attribute("class", `${shape.includes("32x32-circle") && "p-1.5"}`, 0)}></button>` : ``}</div>  ${``}</div></div>`;
});
const ErrorMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message = "" } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  return `  ${message ? `<span class="text-xs text-red-500">${escape(message)}</span>` : ``}`;
});
export {
  CustomDropzone as C,
  ErrorMessage as E,
  Textarea as T
};
