import React, { useState } from 'react'; // Import useState for managing state

const MyApp = () =>{
  const [like,setLike] = useState(0)
  const [dislike,setDislike] = useState(0)

  function increaseLike(){
    setLike(like + 1)
  }
  function increaseDisLike(){
    setDislike(dislike + 1)
  }
  function reset(){
    setLike(0)
    setDislike(0)
  }
  return(
    <div>
    <button onClick={increaseLike}>Like:{like}</button>
    <button onClick={increaseDisLike}>Dislike:{dislike}</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}


export default MyApp;
