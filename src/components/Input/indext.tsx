import React, { InputHTMLAttributes, useState } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ReactNode;
}

function Input({ icon: Icon, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused}>
      {Icon && Icon}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </Container>
  );
}

export default Input;
