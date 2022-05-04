import React from 'react';
import { useAuth } from 'src/context/AuthContext';

// import { Container } from './styles';

function Main() {
  const { signOut } = useAuth();

  return (
    <div>
      <h1>main</h1>
      <button type="button" onClick={signOut}>
        sair
      </button>
    </div>
  );
}

export default Main;
