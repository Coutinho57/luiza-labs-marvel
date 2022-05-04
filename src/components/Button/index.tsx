import React from 'react';
import { ButtonStyled } from './styles';

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <ButtonStyled {...props} />;
}

export default Button;
