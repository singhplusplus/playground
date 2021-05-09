import React from 'react';
import { COLORS_BASIC, ROUNDED, SHADOW } from './../const-ui';
import { configureButton, BTN_SIZES, BTN_TYPES } from './const-button';


// TODO: add handling for which button is currently active
function createButtonGroup(props) {
  const radioGrp = [];
  props.btns.forEach((btn, i) => {
    radioGrp.push(
      <Button key={i} type={BTN_TYPES.solid}>
        {btn}
      </Button>
    );
  });
  return (
    <div role="group" aria-label={props.groupLabel ? props.groupLabel : "Button Group"}>
      {radioGrp}
    </div>
  );
}

function createButton({children, color, type, size, rounded, className, shadow, shade}) {
  type = type || BTN_TYPES.outline;
  color = color || COLORS_BASIC.primary;
  size = size || BTN_SIZES.md;
  rounded = rounded || ROUNDED.md;
  shadow = shadow || SHADOW.none;
  shade = +shade || 500;
  // shade = (shade === 50) ? 100: shade;
  const propClasses = className || "";
  const buttonClasses = configureButton(type, color, shade, size, rounded, shadow);
  return (
    <button className={buttonClasses + " " + propClasses}>
      {children}
    </button>
  );
}

export const ButtonGroup = createButtonGroup;
export const Button = createButton;