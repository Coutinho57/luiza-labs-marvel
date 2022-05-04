import api from '..';
import { IAuth } from './IAuth';

export const authenticate = async (email: string, password: string) => {
  return api.post<IAuth>('/auth', {
    email,
    password,
  });
};
