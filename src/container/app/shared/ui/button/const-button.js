const BTN_SM = "px-2 py-1 text-xs";
const BTN_MD = "px-2 py-1";
const BTN_LG = "px-3 py-2 text-lg";
const BTN_XL = "px-4 py-3 text-xl";

const btnSizeClassMap = {
  sm: BTN_SM,
  md: BTN_MD,
  lg: BTN_LG,
  xl: BTN_XL
}

export const BTN_STYLES = Object.freeze({
  solid: "SOLID",
  outline: "OUTLINE",
  none: "NONE"
});

export const BTN_SIZES = Object.freeze({
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl"
});

export const configureButton = (style, color, shade, size, rounded, shadow) => {
  let bgColor = "";
  let textColor = "";
  let border = "";

  const commonClasses = `${btnSizeClassMap[size]} ${rounded} ${shadow} focus:outline-none`;
  if(BTN_STYLES.solid === style) {
    bgColor = " bg-primary-500 hover:bg-primary-600 focus:bg-primary-700";
    textColor = " text-white";
  }
  else if(BTN_STYLES.outline === style) {
    bgColor = " bg-transparent hover:bg-primary-600 focus:bg-primary-700";
    textColor = " text-primary-500 hover:text-white focus:text-white";
    border = " border border-primary-500";
  }
  else if(BTN_STYLES.none === style) {
    textColor = " text-primary-500 hover:text-primary-600 focus:text-primary-700";
  }
  return `${commonClasses}${bgColor}${textColor}${border}`;
}
