import api from '..';
import { Comics } from './model';

export const getComicsByCharacterId = async (id: number) => {
  const response = await api.get<Comics>(
    `/characters/${id}/comics?ts=1655682080203&apikey=4869b727d93758781625a424b37aab46&hash=c990b0faffb8cd1bb4b5eb4d276842b1`,
  );

  return response;
};
