import React from 'react';
import PropTypes from 'prop-types';
import BookImage from './images/books-general.jpeg';

import { CardBase, Title, Info, Image, Header } from './styles';

const Card = ({ title }) => (
  <CardBase>
    <Image src={BookImage} />
    <Info>
      <Header>
        <Title>{title}</Title>
      </Header>
    </Info>
  </CardBase>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
