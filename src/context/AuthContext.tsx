import React, { createContext, useCallback, useContext, useState } from 'react';
import { authenticate } from 'src/services/auth';

interface IAuthState {
  token: string;
  user: object;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: object;
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

type IAuthProvider = React.PropsWithChildren<{}>;

function AuthProvider({ children }: IAuthProvider) {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@react:token');
    const user = localStorage.getItem('@react:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }: ICredentials) => {
    const response = await authenticate(email, password);

    const { token, user } = response.data;

    localStorage.setItem('@react:token', token);
    localStorage.setItem('@react:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@react:token');
    localStorage.removeItem('@react:user');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth nao foi utilizado no AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
