import React, { useState } from 'react';
import { useAuth } from 'src/context/AuthContext';

// import { Container } from './styles';

function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signIn({ email, password });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form>
      <input
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        placeholder="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button type="button" onClick={handleLogin}>
        Acessar
      </button>
    </form>
  );
}

export default Login;
