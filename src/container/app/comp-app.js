import React from 'react';
import { AppPortfolio  } from './portfoliomod/comp-portfolio';
import {ButtonGroup, Button} from './shared/ui/button/comp-button';
import { BTN_SIZES, BTN_STYLES } from './shared/ui/button/const-button';
import { ROUNDED } from './shared/ui/const-ui';
import { AppHeader } from './shared/ui/header/comp-header';

function App() {
  // const buttongroup = ['First', 'Second', 'Third', 'Fourth'];
  // const weekdaysBtnGrp = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  // const weekendBtnGrp = ['SATURDAY', 'Sunday'];
  return (
      <div className="space-y-3 w-full relative">
        {/* <h1 className="bg-secondary-700">App</h1> */}
        {/* <ButtonGroup btns={buttongroup} groupLabel={"Example"}></ButtonGroup>
        <ButtonGroup btns={weekdaysBtnGrp} groupLabel={"Weekdays"}></ButtonGroup>
        <ButtonGroup btns={weekendBtnGrp} groupLabel={"Weekends"}></ButtonGroup> */}
        {/* <div>
          <Button>Hey click me!</Button>
        </div>
        <div>
          <Button className="mx-2 shadow-md" style={BTN_STYLES.solid} rounded={ROUNDED.default}>Hey click me!</Button>
          <Button className="mx-1" rounded={ROUNDED.full} size={BTN_SIZES.xl} style={BTN_STYLES.outline}>Hey click me!</Button>
          <Button style={BTN_STYLES.solid}>Hey click me!</Button>
        </div>
        <div className="space-x-3">
          <Button rounded={ROUNDED.sm} size={BTN_SIZES.sm}>Hey click me!</Button>
          <Button rounded={ROUNDED.md} size={BTN_SIZES.lg}>Hey click me!</Button>
          <Button rounded={ROUNDED['2xl']} size={BTN_SIZES.xl}>Hey click me!</Button>
        </div> */}

        <AppHeader title="Welcome to my dashboard" />
        <AppPortfolio />

      </div>
  );
}

export default App;