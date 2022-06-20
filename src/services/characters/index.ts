import api from '..';
import { ICharacters } from './model';

export const getCharacters = async (page: number) => {
  const response = await api.get<ICharacters>(
    '/characters?ts=1655682080203&apikey=4869b727d93758781625a424b37aab46&hash=c990b0faffb8cd1bb4b5eb4d276842b1',
    { params: { limit: 20, offset: page } },
  );

  return response;
};

export const getCharacterById = async (id: number) => {
  const response = await api.get<ICharacters>(
    `/characters/${id}?ts=1655682080203&apikey=4869b727d93758781625a424b37aab46&hash=c990b0faffb8cd1bb4b5eb4d276842b1`,
  );

  return response;
};
