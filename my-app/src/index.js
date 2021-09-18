import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/811SRapU9aL._AC_UL200_SR200,200_.jpg",
  title: 'School Zone - Big Preschool Workbook',
  author: 'Paperback'
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
  title: 'I Love You to the Moon and Back',
  author: 'ackson Deep Mila'
}

function BookList() {
  return(
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna erat, rhoncus non suscipit quis, suscipit sit amet nulla.</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} /> 
    </section>
  );
}

const Book = (props) => {
  const {img, title, author, children} = props;
  console.log(props);
  return <article className='book'>
    <img src={img} alt='' width="30%"/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>;
}

// converting the react component as a HTML element
ReactDom.render(<BookList />, document.getElementById('root'));