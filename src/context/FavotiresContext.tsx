import React, { createContext, useCallback, useContext, useState } from 'react';
import { Result } from 'src/services/characters/model';

interface IFavoritesContext {
  favorites: Result[];
  addFavorites(favorite: Result): Promise<void>;
  removeFavorite(favorite: Result): Promise<void>;
}

const FavoriteContext = createContext<IFavoritesContext>(
  {} as IFavoritesContext,
);

type IFavoritesProvider = React.PropsWithChildren<{}>;

function FavoritesProvider({ children }: IFavoritesProvider) {
  const [data, setData] = useState<Result[]>(() => {
    const favorites = localStorage.getItem('@react:favorites');

    if (favorites) {
      return JSON.parse(favorites);
    }

    return [] as Result[];
  });

  const addFavorites = useCallback(
    async (favorite: Result) => {
      if (data.length <= 4) {
        localStorage.setItem(
          '@react:favorites',
          JSON.stringify([...data, favorite]),
        );
        setData(prevState => [...prevState, favorite]);
      }
    },
    [data],
  );

  const removeFavorite = useCallback(
    async (favorite: Result) => {
      localStorage.setItem(
        '@react:favorites',
        JSON.stringify(
          data.filter(permission => permission.id !== favorite.id),
        ),
      );
      setData(prevSate =>
        prevSate.filter(permission => permission.id !== favorite.id),
      );
    },
    [data],
  );

  return (
    <FavoriteContext.Provider
      value={{ favorites: data, addFavorites, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

function useFavorites(): IFavoritesContext {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useFavorites nao foi utilizado no FavoritesProvider');
  }

  return context;
}

export { FavoritesProvider, useFavorites };
