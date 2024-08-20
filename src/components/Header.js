import React from 'react'

const Header = (props) => {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <div onClick={() => props.handleShow(false)}>Shopping Cart</div>
        <button className="btn btn-dark" type="submit"
        onClick={() => props.handleShow(true)}>Cart<sup>{props.count}</sup></button>
      </div>
    </nav>

  )
}

export default Header