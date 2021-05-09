import { COLORS_NOSHADE } from "./const-ui";

function createColorClass(type = "text", color = "primary", shade = 50, state) {
//   if(["text", "bg"].indexOf(type) < 0 ) {
//     throw "valid type options - 'text', 'bg'";
//   }
//   if(!COLORS_BASIC[color]) {
//     throw `valid color options - ${Object.keys(COLORS_BASIC)}`
//   }
//   if(!COLOR_SHADES[shade]) {
//     throw `valid color options - ${Object.keys(COLOR_SHADES)}`
//   }

  let createdClass = `${type}-${color}`;
  createdClass = (COLORS_NOSHADE[color]) ? createdClass : `${createdClass}-${shade}`;
  if(state === "hover" || state === "focus") {
    createdClass = `${state}:${createdClass}`
  }
  return createdClass;
}

function createPaddingClass() {
  console.log()
}

export const colorClass = createColorClass;