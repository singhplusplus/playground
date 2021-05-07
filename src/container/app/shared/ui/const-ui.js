export const BASE_COLORS = {
  primary: "primary",
  secondary: "secondary",
  neutral: "neutral"
};

export const BTN_SIZES = {
  xl: "xl",
  lg: "lg",
  md: "md",
  sm: "sm",
  xs: "xs"
};

let btnFill = Object.assign(BASE_COLORS, {nofill: "nofill"});
export const BTN_FILL = Object.freeze(btnFill);

export const BTN_DEFAULT_CONFIG = {
  // rounded / size / background color / text color / filled - outlined
  rounded: false,
  size: BTN_SIZES.md,
  fill: BTN_FILL.nofill,
  color: BASE_COLORS.primary,
  outline: true
}

export const BTNGROUP_CONFIG = {

}
