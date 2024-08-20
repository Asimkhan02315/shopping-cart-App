
import React from 'react'

const CartList = ({ cart, handleDelete }) => {

  return (
    <div className='container mt-4' >
    <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Size</th>
            <th scope="col">Action</th>
          </tr>
        </thead>


{cart.map((cartvalue, index) => {
    return(

        <tbody>
          <tr>
            <th scope="row" key={index}>{index +1}</th>
            <td>
            <img src={cartvalue.url}  alt="..." width={'50'}/>
            </td>
            <td>{cartvalue.name}</td>
            <td>{cartvalue.price}</td>
            <td>{cartvalue.size}</td>
            <td>
                <button className='btn btn-danger' onClick={() => handleDelete(cartvalue, index)}>Remove</button>
            </td>
          </tr>
        </tbody>

    )
})}

       
      </table>
    </div>
  )
}

export default CartList