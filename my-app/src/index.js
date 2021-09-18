import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const title = 'I Love You to the Moon and Back';
const author = 'Jackson Deep Mila';
const image = "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg";

const BookList = () => {
  return(
    <section className='booklist'>
      <Book />
    </section>
  );
}

const Book = () => {
  return <article className='book'>
    <img src={image} alt='' width="30%"/>
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
  </article>;
}

// converting the react component as a HTML element
ReactDom.render(<BookList />, document.getElementById('root'));