import React from "react";

import ReactDOM from "react-dom";

// import css
import './index.css'
import {books} from './books'
import Book from './Book'

//setup variables
/*const title = "Atomic Habit"
const author = "Muhammad Zeeshan Ahmed"
const image = "https://images-na.ssl-images-amazon.com/images/I/71F4+7rk2eL._AC_UL127_SR127,127_.jpg"
*/
// setup objects
/*const book1 = {
  img:"https://images-na.ssl-images-amazon.com/images/I/71F4+7rk2eL._AC_UL127_SR127,127_.jpg",
  title:"Atomic Habit",
  author:"Muhammad Zeeshan Ahmed"
}
const book2 = {
  img:"https://images-na.ssl-images-amazon.com/images/I/81hSK0bkkFL._AC_UL254_SR254,254_.jpg",
  title:"How to catch a leprechaun",
  author:"Zeeshan"
} */


function Booklist(){
  return(
  /*  <div className="booklist">
      <Book
      img={book1.img}
      title={book1.title}
      author={book1.title}
      />

<Book
      img={book2.img}
      title={book2.title}
      author={book2.title}
      />
     
     
    </div>
    */
   
<div className="booklist">

    {books.map((book)=>{
      return( 
     <Book key={book.id} {...book}></Book>
     ) 
    }
    )}
 </div>
  )
 
}






ReactDOM.render(<Booklist/>, document.getElementById('root'))