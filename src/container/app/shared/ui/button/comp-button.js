import React from 'react';
import { ROUNDED, SHADOW } from './../const-ui';
import { configureButton, BTN_SIZES, BTN_STYLES } from './const-button';


// TODO: add handling for which button is currently active
function createButtonGroup(props) {
  const radioGrp = [];
  props.btns.forEach((btn, i) => {
    radioGrp.push(
      <Button key={i} style={BTN_STYLES.solid}>
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

// TODO: Need to configure color in a better way, also light - dark theme
function createButton({children, color="primary", style=BTN_STYLES.outline, size=BTN_SIZES.md, rounded=ROUNDED.md, className="", shadow=SHADOW.none, shade=500, onClick, type="button"}) {
  const buttonClasses = configureButton(style, color, +shade, size, rounded, shadow);
  return (
    <button type={type} className={`${buttonClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export const ButtonGroup = createButtonGroup;
export const Button = createButton;