import React from 'react';
import PropTypes from 'prop-types';
import FavoriteSvg from 'src/images/favorite.svg';
import UnFavoriteSvg from 'src/images/unfavorite.svg';

import {
  CardBase,
  StatusIcon,
  Title,
  Label,
  Value,
  Row,
  Info,
  Image,
  Subtitle,
  StatusBox,
  Header,
  ImageFavorites,
} from './styles';

const Card = ({
  statusActive = false,
  name,
  origin,
  location,
  species,
  status,
  imageUrl,
  isFav = false,
}) => (
  <CardBase>
    <Image src={imageUrl} />
    <Info>
      <Header>
        <Title>{name}</Title>
        <ImageFavorites
          src={isFav ? FavoriteSvg : UnFavoriteSvg}
          width={24}
          height={24}
          onClick={() => {}}
        />
      </Header>
      <StatusBox>
        <StatusIcon active={statusActive} />
        <Subtitle>
          {status} - {species}
        </Subtitle>
      </StatusBox>
      <Row>
        <Label>Last known location</Label>
        <Value>{location}</Value>
      </Row>

      <Row>
        <Label>First seen in</Label>
        <Value>{origin}</Value>
      </Row>
    </Info>
  </CardBase>
);

Card.propTypes = {
  statusActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isFav: PropTypes.bool.isRequired,
};

export default Card;
