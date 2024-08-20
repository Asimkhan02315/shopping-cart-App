import React, { useState } from 'react'

const ProductList = ({ product, handleAddCart }) => {

  const [likeNumber, setLikeNumber] = useState(0);

  const [dislikeNumber, setDislikeNumber] = useState(0);

  function handleLikeClick (){
    return(
     setLikeNumber(likeNumber +1)
    )
  }
  
  function handleDislikeClick () {
    return(
      setDislikeNumber(dislikeNumber +1)
    )
  }
   
 
  return (
    <div className='container mt-4'>
    <div className='row'>

{product.map((productvalue, index) => {
    return(

        <div className='col' key={index}>
      <div className="card" style={{width: '18rem'}}>
        <img src={productvalue.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Name: {productvalue.name}</p>
          <p className="card-text">Price: Rs.{productvalue.price}</p>
          <p className="card-text">Size: {productvalue.size}</p>
          <button className='btn btn-primary' 
          onClick={() => handleAddCart(productvalue)}>Add To Cart</button>
        </div>

<div>
<button className='btn btn-dark' onClick={handleLikeClick}>👍</button>
<h9>{likeNumber} Likes</h9>

<button className='btn btn-dark' onClick={handleDislikeClick}>👎</button>
<h9>{dislikeNumber} Dislikes</h9>
</div>
</div>
</div>
    )
})}
      </div>
    </div>




  )
}

export default ProductList