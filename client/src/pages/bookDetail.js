import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CardDetail from '../components/CardDetail';

import { BookListBase } from './styles';
import { fetchBookDetailRequestAction } from '../effects/BookDetails/actions';
import { getBookDetail } from '../effects/BookDetails/selectors';

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const bookDetail = useSelector(getBookDetail);

  useEffect(() => {
    dispatch(fetchBookDetailRequestAction({ id }));
  }, []);

  return (
    <BookListBase>
      <CardDetail {...bookDetail} />
    </BookListBase>
  );
};

export default BookDetail;
