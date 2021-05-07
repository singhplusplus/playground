import React from 'react';
// import { render } from 'react-dom';
import {ButtonGroup, Button} from './shared/ui/button/comp-button'

function App() {
  const buttongroup = ['First', 'Second', 'Third', 'Fourth'];
  const weekdaysBtnGrp = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  const weekendBtnGrp = ['SATURDAY', 'Sunday'];
  return (
      <div className="space-y-3">
        <h1 className="bg-secondary-700">App</h1>
        <ButtonGroup btns={buttongroup} groupLabel={"Example"}></ButtonGroup>
        <ButtonGroup btns={weekdaysBtnGrp} groupLabel={"Weekdays"}></ButtonGroup>
        <ButtonGroup btns={weekendBtnGrp} groupLabel={"Weekends"}></ButtonGroup>
        <Button>Hey click me!</Button>
      </div>
  );
}

export default App;