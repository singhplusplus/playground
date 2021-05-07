import React from 'react';
import { BTN_DEFAULT_CONFIG, BTN_FILL } from '../const-ui';


// TODO: add handling for which button is currently active
function createButtonGroup(props) {
  const radioGrp = [];

  console.log("BTN_FILL", BTN_FILL);
  // BTN_FILL.primary = "NEW COLOR";
  console.log("BTN FILL UPDATED", BTN_FILL);
  // console.log(props)
  props.btns.forEach((btn, i) => {
    radioGrp.push(
      <Button key={i} config={BTN_DEFAULT_CONFIG}>
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

/* // TODO: add button type configurations -
   rounded / size / background color / text color / filled - outlined */
function createButton({children, config}) {
  config = config || BTN_DEFAULT_CONFIG;
  console.log(config)
  return (
    <button className="hover:bg-primary-700 focus:bg-primary-800 focus:outline-none p-1 px-2 border-white bg-primary-500 text-white">
      {children}
    </button>
  );
}

const COLORS = "";

export const DEFAULT_BUTTON_CONFIG = {
  rounded: false,
  size: ""
}

export const ButtonGroup = createButtonGroup;
export const Button = createButton;