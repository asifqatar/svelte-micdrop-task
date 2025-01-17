import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { required = false } = $$props;
  let { disabled = false } = $$props;
  let { optional = false } = $$props;
  let { icon = null } = $$props;
  let { buttonIcon = null } = $$props;
  let { buttonText = null } = $$props;
  let { maxlength = null } = $$props;
  let { minlength = null } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = "" } = $$props;
  let { label = "" } = $$props;
  let { id = "" } = $$props;
  let { name = "" } = $$props;
  let { className = "" } = $$props;
  let { size = "" } = $$props;
  let { errorText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { hintText = "" } = $$props;
  let { hintIcon = "" } = $$props;
  let { contentFloat = "left" } = $$props;
  let { readonly = false } = $$props;
  let { controlled = false } = $$props;
  let { onButtonClick = null } = $$props;
  let { value = "" } = $$props;
  let inputValue = value;
  let displayErrorText = "";
  const getSizeClass = () => {
    switch (size) {
      case "full":
        return "w-full";
      case "large":
        return "w-96";
      case "medium":
        return "w-64";
      case "small":
        return "w-52";
      default:
        return "w-44";
    }
  };
  const getContentFloatClass = () => {
    switch (contentFloat) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.optional === void 0 && $$bindings.optional && optional !== void 0) $$bindings.optional(optional);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.buttonIcon === void 0 && $$bindings.buttonIcon && buttonIcon !== void 0) $$bindings.buttonIcon(buttonIcon);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0) $$bindings.buttonText(buttonText);
  if ($$props.maxlength === void 0 && $$bindings.maxlength && maxlength !== void 0) $$bindings.maxlength(maxlength);
  if ($$props.minlength === void 0 && $$bindings.minlength && minlength !== void 0) $$bindings.minlength(minlength);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.errorText === void 0 && $$bindings.errorText && errorText !== void 0) $$bindings.errorText(errorText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0) $$bindings.helperText(helperText);
  if ($$props.hintText === void 0 && $$bindings.hintText && hintText !== void 0) $$bindings.hintText(hintText);
  if ($$props.hintIcon === void 0 && $$bindings.hintIcon && hintIcon !== void 0) $$bindings.hintIcon(hintIcon);
  if ($$props.contentFloat === void 0 && $$bindings.contentFloat && contentFloat !== void 0) $$bindings.contentFloat(contentFloat);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0) $$bindings.readonly(readonly);
  if ($$props.controlled === void 0 && $$bindings.controlled && controlled !== void 0) $$bindings.controlled(controlled);
  if ($$props.onButtonClick === void 0 && $$bindings.onButtonClick && onButtonClick !== void 0) $$bindings.onButtonClick(onButtonClick);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  value = inputValue;
  return `<div class="${"flex flex-col gap-3 " + escape(className, true)}">${label ? `<div class="flex justify-start items-center gap-1"><label${add_attribute("for", id, 0)} class="text-Text-Primary text-sm not-italic leading-[14px] font-medium">${escape(label)}</label> ${optional ? `<span class="text-Text-Tartiary" data-svelte-h="svelte-ay5mwm">(optional)</span>` : ``}</div>` : ``} <div class="${"relative " + escape(getSizeClass(), true)}">${type === "textarea" ? `<textarea${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("maxlength", maxlength, 0)}${add_attribute("minlength", minlength, 0)} class="${"py-3 px-4 text-Text-Tartiary font-medium text-sm leading-3 border rounded-md focus:outline-none focus:ring-2 focus:border-blue-500 hover:border-blue-500 resize-y " + escape(getContentFloatClass(), true) + " " + escape("border-gray-300", true) + " " + escape(getSizeClass(), true) + " " + escape(className, true)}" ${""} ${disabled ? "disabled" : ""} ${readonly ? "readonly" : ""} rows="4"${add_attribute("aria-required", required, 0)}>${escape(inputValue, false)}</textarea>` : `<div class="flex items-center"><input${add_attribute("id", id, 0)}${add_attribute("type", type, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", inputValue, 0)}${add_attribute("maxlength", maxlength, 0)}${add_attribute("minlength", minlength, 0)} class="${"p-4 bg-gray-50 text-Text-Tartiary font-medium text-sm leading-3 border rounded-md focus:outline-none focus:ring-2 focus:border-blue-500 hover:border-blue-500 " + escape(icon ? "pr-10" : "", true) + " " + escape(getContentFloatClass(), true) + " " + escape("border-gray-300", true) + " " + escape(getSizeClass(), true) + " " + escape(className, true)}" ${""} ${disabled ? "disabled" : ""} ${readonly ? "readonly" : ""}${add_attribute("aria-required", required, 0)}> ${controlled && (buttonIcon || buttonText) ? `<button type="button" class="${"absolute inset-y-0 right-0 gap-1 flex items-center justify-center px-4 " + escape(helperText || hintText || displayErrorText ? "mb-7" : "", true)}">${buttonIcon ? `<img${add_attribute("src", buttonIcon, 0)} alt="Button Icon" class="w-5 h-5">` : ``} ${buttonText ? `<span class="text-sm font-normal text-brand-Primary">${escape(buttonText)}</span>` : ``}</button>` : ``}</div>`} ${`${hintText ? `<div class="mt-2 flex items-center text-Text-Tartiary opacity-65 text-sm">${hintIcon ? `<img${add_attribute("src", hintIcon, 0)} alt="Hint icon" class="w-4 h-4 mr-2">` : ``} <span>${escape(hintText)}</span></div>` : `${helperText ? `<p class="mt-2 text-Text-Tartiary opacity-65 text-sm">${escape(helperText)}</p>` : ``}`}`} ${icon && type !== "textarea" ? `<img${add_attribute("src", icon, 0)} alt="Input icon" class="absolute inset-y-0 right-0 w-5 h-5 mr-3 top-1/2 transform -translate-y-1/2 text-Text-Primary">` : ``}</div></div>`;
});
export {
  Input as I
};
