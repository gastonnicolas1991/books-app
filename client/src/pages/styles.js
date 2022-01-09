import styled from 'styled-components';
import { CardBase } from 'src/components/Card/styles';
import { media } from 'src/styles/media';
import colors from 'src/styles/colors';

export const CharactersBase = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 20px;
  background-color: ${colors.black};

  ${media.tablet} {
    justify-content: center;
  }

  ${media.desktop} {
    justify-content: flex-start;
    margin: auto;
    max-width: 1300px;
  }

  ${CardBase} {
    margin: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
  font-size: 50px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-weight: 900;

  ${media.tablet} {
    font-size: 80px;
  }
`;
