import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

import { BookListBase, Header } from './styles';
import { fetchBooksRequestAction } from '../effects/Books/actions';
import { getAllBooks } from '../effects/Books/selectors';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(getAllBooks);

  useEffect(() => {
    dispatch(fetchBooksRequestAction());
  }, []);

  return (
    <BookListBase>
      <Header>Books</Header>
      {books?.map(item => (
        <Link to={`/books/${item.link}`}>
          <Card key={`${item.title}-${item.id}`} title={item?.title} />
        </Link>
      ))}
    </BookListBase>
  );
};

export default BookList;
