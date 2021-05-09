import React from 'react';
import {ButtonGroup, Button} from './shared/ui/button/comp-button';
import { BTN_SIZES, BTN_TYPES } from './shared/ui/button/const-button';
import { COLORS_BASIC, COLOR_SHADES, ROUNDED } from './shared/ui/const-ui';

function App() {
  const buttongroup = ['First', 'Second', 'Third', 'Fourth'];
  const weekdaysBtnGrp = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  const weekendBtnGrp = ['SATURDAY', 'Sunday'];
  return (
      <div className="space-y-3 px-16">
        <h1 className="bg-secondary-700">App</h1>
        {/* <ButtonGroup btns={buttongroup} groupLabel={"Example"}></ButtonGroup>
        <ButtonGroup btns={weekdaysBtnGrp} groupLabel={"Weekdays"}></ButtonGroup>
        <ButtonGroup btns={weekendBtnGrp} groupLabel={"Weekends"}></ButtonGroup> */}
        <div>
          <Button>Hey click me!</Button>
        </div>
        <div>
          <Button className="mx-2 shadow-md" type={BTN_TYPES.solid} rounded={ROUNDED.default}>Hey click me!</Button>
          <Button className="mx-1" rounded={ROUNDED.full} color={COLORS_BASIC.secondary} size={BTN_SIZES.xl} type={BTN_TYPES.outline}>Hey click me!</Button>
          <Button type={BTN_TYPES.solid} color="teal">Hey click me!</Button>
        </div>
        <div className="space-x-3">
          <Button rounded={ROUNDED.sm} size={BTN_SIZES.sm}>Hey click me!</Button>
          <Button rounded={ROUNDED.md} size={BTN_SIZES.lg}>Hey click me!</Button>
          <Button rounded={ROUNDED['2xl']} color="amber" shade={COLOR_SHADES[300]} size={BTN_SIZES.xl}>Hey click me!</Button>
        </div>
      </div>
  );
}

export default App;