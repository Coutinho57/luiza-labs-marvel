import React from 'react';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './styles';

interface ISwitch {
  checked: boolean;
  onChange: () => void;
}

function Switch({ checked, onChange }: ISwitch) {
  return (
    <CheckBoxWrapper>
      <CheckBox
        checked={checked}
        onChange={() => onChange()}
        id="checkbox"
        type="checkbox"
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
}

export default Switch;
