import React from 'react';
import BookForm from '../form';

export default function Edit({route, navigation}) {
  const {books} = route.params;

  return (
    <BookForm
      initialValues={{
        bookTitle: books.bookTitle,
        authorName: books.authorName,
        description: books.description,
      }}
    />
  );
}
