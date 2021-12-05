import React from "react";
import ReactDOM from "react-dom";
import "./index.css" ;
function BookList(){
    return (
        <section >
            <Book/>
        </section>
    );
}

const author="I am a author";
const Book=() => {
    const title="hello there"
    return (
        <div>
            <h1>{title}</h1>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/330px-Trollface_non-free.png" 
            alt="why you do this to me"></img>
            <h4>{author.toUpperCase()}</h4>
            <h4>Price:{5+5}</h4>
        </div>
    )
}

ReactDOM.render(<BookList/>,document.getElementById('root'));