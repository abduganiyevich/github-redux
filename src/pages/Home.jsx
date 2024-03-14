import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import Cart from './Cart';

function Home() {
  const [books, setBooks] = useState([]);
  const [local, setLocal] = useState([]);

  useEffect(() => {
    setBooks(data);
    setLocal(getData());
  }, []);

  function handleBookmark(data, exist) {
    let copied = JSON.parse(JSON.stringify(local));
    if (exist) {
      copied = copied.filter((el) => {
        return !(el.imageLink === data.imageLink && el.title === data.title);
      });
    } else {
      copied.push(data);
    }
    setLocal(copied);
    localStorage.setItem('books', JSON.stringify(copied));
  }

  function getData() {
    let data = [];
    if (localStorage.getItem('books')) {
      data = JSON.parse(localStorage.getItem('books'));
    }
    return data;
  }

  return (
    <div>
      {books.length > 0 &&
        books.map((book, index) => {
          let isExist = false;
          if (local.length) {
            isExist = local.some((el) => {
              return el.imageLink === book.imageLink;
            });
          }
          return <Cart exist={isExist} click={handleBookmark} key={index} data={book} />;
        })}
    </div>
  );
}

export default Home;
