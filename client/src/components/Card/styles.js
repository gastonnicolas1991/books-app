import styled from 'styled-components';
import { media } from 'src/styles/media';
import colors from 'src/styles/colors';

export const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${colors.grey1};
  color: ${colors.white2};
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  width: 100%;

  ${media.tablet} {
    flex-direction: row;
    width: 600px;
    height: 220px;
  }
`;

export const Image = styled.img`
  ${media.tablet} {
    flex: 0 1 auto;
    width: 40%;
  }
`;

export const Info = styled.div`
  display: flex;
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

export const Subtitle = styled.div`
  font-size: 14px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  color: ${colors.grey2};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Value = styled.div`
  color: ${colors.white2};
  font-size: 18px;
`;

export const StatusBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StatusIcon = styled.span`
  background-color: ${props => (props.active ? `${colors.green}` : `${colors.red}`)};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-right: 6px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ImageFavorites = styled.img`
  padding-right: 20px;
  cursor: pointer;
`;
