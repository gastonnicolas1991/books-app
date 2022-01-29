import styled from 'styled-components';
import { media } from '../../styles/media';
import colors from '../../styles/colors';

export const CardBase = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background-color: ${colors.grey1};
  color: ${colors.white2};
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  margin: 20px 0;

  ${media.tablet} {
    width: 600px;
    height: 110px;
  }
`;

export const Image = styled.img`
  flex: 0 1 auto;
  width: 20%;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;

  border: none;
  flex-direction: column;
  padding: 12px;

  flex: 1 1 auto;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 20px;
`;
