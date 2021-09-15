import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const BookList = () => {
  return(
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>;
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg" alt="" width="30%"></img>
}

const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>
}

const Author = () => {
  return <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Jackson Deep Mila</h4>
}

// converting the react component as a HTML element
ReactDom.render(<BookList />, document.getElementById('root'));