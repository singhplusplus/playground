import React from 'react';

function largeButton(props) {
  const radioGrp = [];
  console.log(props)
  props.btns.forEach((btn, i) => {
    radioGrp.push(<button key={i} className="hover:bg-primary-300 focus:bg-primary-400 focus:outline-none p-1 px-2 border-r border-white bg-primary-200 text-primary-800">
      {btn}
    </button>);
  });
  return (
    <>
      {radioGrp}
    </>
  );
}

export const ButtonLg = largeButton;