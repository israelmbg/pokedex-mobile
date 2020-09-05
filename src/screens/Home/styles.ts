import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #a00;
`;


export const Content = styled.View`
  
`;

export const PokemonImage = styled.Image`
  width: 220px;
  height: 220px;
`;

export const ImageContainer = styled.View`
 background-color: #f8f8f2;
  align-items: center;

  border-radius: 10px;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  overflow: hidden;
`;

export const PokemonName = styled.Text`
  background-color: #333;

  padding: 10px;
  text-align: center;

  color: #f8f8f2;
  font-weight: bold;
  font-size: 24px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
