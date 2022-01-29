import styled from 'styled-components';
import { media } from '../styles/media';
import colors from '../styles/colors';

export const BookListBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;

  background-color: ${colors.black};

  a {
    text-decoration: none;

    ${media.tablet} {
      margin-right: 20px;
    }
  }

  ${media.tablet} {
    justify-content: center;
  }

  ${media.desktop} {
    justify-content: flex-start;
    margin: auto;
    max-width: 1300px;
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
