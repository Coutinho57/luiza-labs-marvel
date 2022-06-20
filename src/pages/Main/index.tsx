import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as FavoriteOnIIcon } from 'src/assets/icons/favorito_01.svg';
import { ReactComponent as FavoriteOffIIcon } from 'src/assets/icons/favorito_02.svg';
import { ReactComponent as SearchIcon } from 'src/assets/icons/ic_busca.svg';
import { ReactComponent as HeroIcon } from 'src/assets/icons/ic_heroi.svg';
import { ReactComponent as Logo } from 'src/assets/icons/logo.svg';
import Input from 'src/components/Input/indext';
import ItemList from 'src/components/ItemList';
import { Pagination } from 'src/components/Pagination';
import Spinner from 'src/components/Spinner';
import Switch from 'src/components/Switch';
import { useFavorites } from 'src/context/FavotiresContext';
import { useDebounce } from 'src/hooks/UseDebounce';
import { getCharacters } from 'src/services/characters';
import {
  Container,
  Content,
  ControlList,
  Footer,
  Header,
  List,
  RightContent,
  WrapperSpinner,
} from './styles';

function Main() {
  const [order, setOrder] = useState(false);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const { favorites, addFavorites, removeFavorite } = useFavorites();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  async function getAll(currentPage: number) {
    const { data } = await getCharacters(currentPage);
    return {
      characters: data.data.results,
      pagination: { count: data.data.count, total: data.data.total },
    };
  }

  const { data, isLoading } = useQuery(['characters', page], () =>
    getAll(page),
  );

  const { characters, pagination } = data || { characters: [] };

  useEffect(() => {
    if (pagination?.total) {
      setTotal(pagination.total);
    }
  }, [pagination]);

  const list = useMemo(() => {
    const localData = onlyFavorites ? favorites : characters;

    const localCharacters =
      debouncedSearchTerm === ''
        ? localData
        : localData.filter(character =>
            character.name
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase()),
          );

    const charactersOrder = localCharacters.sort((a, b) =>
      a.name.toLocaleLowerCase().localeCompare(b.name.toLowerCase()),
    );

    if (!order) {
      return charactersOrder.reverse();
    }
    return charactersOrder;
  }, [onlyFavorites, favorites, characters, debouncedSearchTerm, order]);

  return (
    <Container>
      <Content>
        <Header>
          <Logo />
          <strong>EXPLORE O UNIVERSO</strong>
          <span>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrrá em breve!
          </span>
          <Input
            name="Input"
            placeholder="Procure por heróis"
            icon={<SearchIcon />}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </Header>
        <ControlList>
          <span>{`Encontrados ${list.length} heróis`}</span>
          <RightContent>
            <div>
              <HeroIcon />
              <span>Ordenar por nome - A/Z</span>
              <Switch
                checked={order}
                onChange={() => setOrder(prevState => !prevState)}
              />
            </div>
            <div className="onlyFavorites">
              <div style={{ cursor: 'pointer' }}>
                {onlyFavorites ? (
                  <FavoriteOnIIcon
                    onClick={() => setOnlyFavorites(prevState => !prevState)}
                  />
                ) : (
                  <FavoriteOffIIcon
                    onClick={() => setOnlyFavorites(prevState => !prevState)}
                  />
                )}
              </div>
              <span>Somente favoritos</span>
            </div>
          </RightContent>
        </ControlList>
        {!isLoading ? (
          <List>
            {list.length > 0 &&
              list.reverse().map(el => {
                const alreadyFavorited = favorites.some(
                  favorite => favorite.id === el.id,
                );
                return (
                  <ItemList
                    imgUrl={`${el.thumbnail.path}.${el.thumbnail.extension}`}
                    name={el.name}
                    key={el.id}
                    onFavoriteClick={() =>
                      alreadyFavorited ? removeFavorite(el) : addFavorites(el)
                    }
                    favorited={alreadyFavorited}
                    onClick={() => navigate(`/character/${el.id}`)}
                  />
                );
              })}
          </List>
        ) : (
          <WrapperSpinner>
            <Spinner />
          </WrapperSpinner>
        )}
        <Pagination
          registerPerPage={20}
          currentPage={page}
          totalCountOfRegisters={total}
          onPageChange={setPage}
        />
      </Content>
      <Footer />
    </Container>
  );
}

export default Main;
