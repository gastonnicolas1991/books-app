import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCharactersRequestAction } from 'src/effects/Characters/actions';
import { getAllCharacters } from 'src/effects/Characters/selectors';
import Card from 'src/components/Card';

import { CharactersBase, Header } from './styles';

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector(getAllCharacters);

  useEffect(() => {
    dispatch(fetchCharactersRequestAction());
  }, []);

  return (
    <CharactersBase>
      <>
        <Header>Rick and Morty</Header>
        {characters?.map(item => (
          <Card key={`${item.name}-${item.id}`} {...item} />
        ))}
      </>
    </CharactersBase>
  );
};

export default Characters;
