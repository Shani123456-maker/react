  import React from 'react'
  const Book = (props) => { 
  

    const clickHandler=()=>{
      alert('you click a button')
    }
  
    return ( <article className="book" onMouseOver={()=>{
      console.log("shani")
    }}>
    <img src={props.img}/> 
    <h4 onClick={()=>{console.log(props.title)}}>{props.title}</h4>
    <p>{props.author.toUpperCase()}</p>
    <button onClick={clickHandler}>A button here</button>
   
    
  </article>
  )
  }
 
  
  export default Book