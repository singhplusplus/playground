import React from 'react';
// import { render } from 'react-dom';
import {ButtonLg} from './shared/button/comp-button'

function App() {
  const buttongroup = ['First', 'Second', 'Third', 'Fourth'];
  return ( 
      <div className="space-y-3">
        <h1 className="bg-red-300">App</h1>
        <ButtonLg btns={buttongroup}></ButtonLg>
      </div>
  );
}

export default App;