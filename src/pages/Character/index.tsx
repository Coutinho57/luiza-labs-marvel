import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as FavoriteOnIIcon } from 'src/assets/icons/favorito_01.svg';
import { ReactComponent as FavoriteOffIIcon } from 'src/assets/icons/favorito_02.svg';
import { ReactComponent as Comics } from 'src/assets/icons/ic_quadrinhos.svg';
import { ReactComponent as Trailer } from 'src/assets/icons/ic_trailer.svg';
import { ReactComponent as Logo } from 'src/assets/icons/logo_menor.svg';
import ItemList from 'src/components/ItemList';
import Spinner from 'src/components/Spinner';
import { useFavorites } from 'src/context/FavotiresContext';
import { getCharacterById } from 'src/services/characters';
import { getComicsByCharacterId } from 'src/services/comics';
import {
  Body,
  Container,
  Content,
  FirstBlock,
  Footer,
  Header,
  LeftContent,
  List,
  RightContent,
  WrapperIcon,
  WrapperSpinner,
} from './styles';

function Character() {
  const { id } = useParams();

  const { favorites, addFavorites, removeFavorite } = useFavorites();

  const navigate = useNavigate();

  async function getById(idCharacter?: number) {
    if (idCharacter) {
      const { data } = await getCharacterById(idCharacter);
      return data.data.results[0];
    }
    return undefined;
  }

  async function getComics(idCharacter?: number) {
    if (idCharacter) {
      const { data } = await getComicsByCharacterId(idCharacter);
      return data.data.results;
    }
    return undefined;
  }

  const { data, isLoading } = useQuery(['character', id], () =>
    getById(Number(id)),
  );

  const { data: comics = [], isLoading: isLoadingComic } = useQuery(
    ['comics', id],
    () => getComics(Number(id)),
  );

  // console.log('comiii', comicsz);

  const favorited = useMemo(() => {
    return favorites.some(item => item.id === Number(id));
  }, [favorites, id]);

  const handleFavorite = () => {
    if (data) {
      if (favorited) {
        removeFavorite(data);
      } else {
        addFavorites(data);
      }
    }
  };

  return (
    <Container>
      <Content>
        <Header>
          <Logo onClick={() => navigate('/')} />
        </Header>
        {!isLoading && !isLoadingComic ? (
          <Body>
            <FirstBlock>
              <LeftContent>
                <div className="block">
                  <strong>{data?.name}</strong>
                  {favorited ? (
                    <FavoriteOnIIcon onClick={handleFavorite} />
                  ) : (
                    <FavoriteOffIIcon onClick={handleFavorite} />
                  )}
                </div>
                <span>{data?.description}</span>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <WrapperIcon>
                    <span>Quadrinhos</span>
                    <div>
                      <Comics /> <span>{data?.comics.available}</span>
                    </div>
                  </WrapperIcon>
                  <WrapperIcon>
                    <span>Filmes</span>
                    <div>
                      <Trailer /> <span>{data?.series.available}</span>
                    </div>
                  </WrapperIcon>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span>Rating: </span>{' '}
                  {Array.from(Array(5).keys()).map(() => (
                    <FavoriteOffIIcon style={{ marginLeft: 5 }} />
                  ))}
                </div>
                <div>
                  <span>{`Ultimo quadrinho:  ${new Date(
                    data?.modified || '',
                  ).toLocaleDateString('pt-BR', {
                    month: 'long',
                    year: 'numeric',
                    day: 'numeric',
                  })}`}</span>
                </div>
              </LeftContent>
              <RightContent>
                <img
                  src={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
                  alt={data?.name}
                />
              </RightContent>
            </FirstBlock>
            <div style={{ marginTop: 50 }}>
              <strong>Últimos lançamentos</strong>
              <List>
                {comics.map(
                  (comic, index) =>
                    index <= 9 && (
                      <ItemList
                        imgUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        name={comic.title}
                        key={`${comic.title}-${comic.id}`}
                      />
                    ),
                )}
              </List>
            </div>
          </Body>
        ) : (
          <WrapperSpinner>
            <Spinner />
          </WrapperSpinner>
        )}
      </Content>
      <Footer />
    </Container>
  );
}

export default Character;
