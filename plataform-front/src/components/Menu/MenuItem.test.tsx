import React from "react";
import MenuItem from './MenuItem';
//sample

describe('[components] - Menu', () => {
  const setup = () => {
    function setActiveItem(item: string): void {
      console.log(item);
    }

    return (
        <MenuItem title='Test' to='/test' onClick={() => setActiveItem("Your Dream")}/>
    );
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});