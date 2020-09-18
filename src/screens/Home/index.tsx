import React, { useEffect, useState } from 'react';

import { Container, Content, PokemonName, ImageContainer, PokemonImage } from './styles';

import api from '../../services/pokeapi'

const Home: React.FC = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImageUrl, setPokemonImageUrl] = useState('');

  useEffect(() => {
    async function fetchPokemonData(pokemonName: string) {
      const response = await api.get(`/${pokemonName}`)

      setPokemonName(response.data.name)
      setPokemonImageUrl(`${response.data.sprites.front_default}`)
    }

    fetchPokemonData('pikachu')
  })

  return (
    <>
      <Container>
        <Content>
          <ImageContainer>
            <PokemonImage source={ pokemonImageUrl ? { uri: pokemonImageUrl } : {}}/>
          </ImageContainer>
        <PokemonName>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</PokemonName>
        </Content>
      </Container>
    </>
  );
};

export default Home;
