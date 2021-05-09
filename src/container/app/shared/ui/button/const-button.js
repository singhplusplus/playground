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

//   rounded / size / background color / text color / filled - outlined
//   rounded: ROUNDED.roundedsm,
//   size: BTN_SIZES.md,
//   fill: {
//     normal: COLORS_BASIC.current,
//     active: COLORS_BASIC.${color}
//   },
//   color: COLORS_BASIC.${color},
//   outline: true,
//   padding: [PADDING.x[2], PADDING.y[1]]

export const BTN_TYPES = Object.freeze({
  solid: "SOLID",
  outline: "OUTLINE"
});

export const BTN_SIZES = Object.freeze({
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl"
});
  
export const configureButton = (type, color, shade, size, rounded, shadow) => {
  let configuredClasses = "";

  const commonClasses = `${btnSizeClassMap[size]} ${rounded} ${shadow} focus:outline-none`;
  const hoverShade = (shade <= 700) ? shade + 100 : 800;
  const focusShade = (shade <= 700) ? shade + 200 : 900;
  if(BTN_TYPES.solid === type) {
    const bgColor = `bg-${color}-${shade} hover:bg-${color}-${hoverShade} focus:bg-${color}-${focusShade}`;
    const textColor = `text-white`;

    configuredClasses = `${commonClasses} ${bgColor} ${textColor}`;
  }
  else if(BTN_TYPES.outline === type) {
    const bgColor = `bg-transparent hover:bg-${color}-${hoverShade} focus:bg-${color}-${focusShade}`;
    const textColor = `text-${color}-${shade} hover:text-white focus:text-white`;
    const border = `border border-${color}-${shade}`;

    configuredClasses = `${commonClasses} ${bgColor} ${textColor} ${border}`;
  }
  return configuredClasses;
}
