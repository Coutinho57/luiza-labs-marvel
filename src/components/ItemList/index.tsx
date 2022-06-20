import React from 'react';
import { ReactComponent as FavoriteOnIIcon } from 'src/assets/icons/favorito_01.svg';
import { ReactComponent as FavoriteOffIIcon } from 'src/assets/icons/favorito_02.svg';

import { Container, WrapperLike } from './styles';

interface IItemList {
  onFavoriteClick?: () => void;
  onClick?: () => void;
  imgUrl: string;
  name: string;
  favorited?: boolean;
}

function ItemList({
  favorited = false,
  onFavoriteClick,
  onClick,
  imgUrl,
  name,
}: IItemList) {
  return (
    <Container>
      <img
        style={{ cursor: onClick ? 'pointer' : 'default' }}
        src={imgUrl}
        alt={name}
        onClick={() => onClick && onClick()}
      />
      <WrapperLike>
        <span>{name}</span>
        {onFavoriteClick &&
          (favorited ? (
            <FavoriteOnIIcon onClick={() => onFavoriteClick()} />
          ) : (
            <FavoriteOffIIcon onClick={() => onFavoriteClick()} />
          ))}
      </WrapperLike>
    </Container>
  );
}

export default ItemList;
