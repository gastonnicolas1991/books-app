import React from 'react';

import PropTypes from 'prop-types';

import { CardDetailBase, Title, Row, Label, Value, Image, Info } from './styles';

const CardDetail = ({ title, image, author, price }) => {
  return (
    <CardDetailBase>
      <Image src={image} />
      <Info>
        <Title>{title}</Title>
        <Row>
          <Label>Author:</Label>
          <Value>{author}</Value>
        </Row>
        <Row>
          <Label>Price:</Label>
          <Value>{price}</Value>
        </Row>
      </Info>
    </CardDetailBase>
  );
};

CardDetail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
};

export default CardDetail;
