import styled from 'styled-components';
import { media } from '../../styles/media';
import colors from '../../styles/colors';

export const CardDetailBase = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey1};
  border-radius: 8px;
  margin: 40px;

  color: ${colors.white2};
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  flex: 1 1 auto;

  ${media.tablet} {
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${colors.white};
  padding-bottom: 40px;

  ${media.desktop} {
    font-size: 66px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const Label = styled.div`
  display: flex;
  padding-right: 10px;
  font-size: 20px;
  color: ${colors.grey2};

  ${media.desktop} {
    font-size: 33px;
  }
`;
export const Value = styled.div`
  display: flex;
  font-size: 20px;
  color: ${colors.white2};
  ${media.desktop} {
    font-size: 33px;
  }
`;

export const Image = styled.img`
  ${media.tablet} {
    flex: 0 1 auto;
    width: 30%;
  }
`;

export const Info = styled.div`
  display: flex;

  border: none;
  flex-direction: column;
  padding: 20px;
`;
