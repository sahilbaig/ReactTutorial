import React from "react";
import ReactDOM from "react-dom";
import "./index.css" ;


const books=[
    {   
        id:1,
        title:"Book 1",
        author:"Author 1",
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/330px-Trollface_non-free.png"
    },
    
    {
        id:2,
        title: "Book2",
        author: "Author 2",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SJ3XPQ7Ysv-y1JZSVOAOUvGOCIKT7TWk7g&usqp=CAU"
    }



]

function BookList(){
    return (
        <section >
           {books.map((book)=>{
              return(
                    <Book key={book.id} book={book}></Book>
              )
           })}
            
        </section>
    );
 }

const Book=(props) => {
    const {img,title,author}=props.book
    return (
        <div>
            <h1>{title}</h1>
            <img src={img} 
            alt="why you do this to me"></img>
            <h4>{author}</h4>
            {props.children}
        </div>
    )
}

ReactDOM.render(<BookList/>,document.getElementById('root'));