
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useEffect, useState } from 'react';

function App() {

const [product, setProduct] = useState([
  {
    url:"https://rukminim1.flixcart.com/image/832/832/kkfrjww0/t-shirt/h/1/t/l-t312-cgblwh-new-eyebogler-original-imafzs5hrjgzsfpr.jpeg?q=70",
    name:"T-Shirt",
    size:"30",
    price:"999"

  },

  {
    url:"https://media.istockphoto.com/id/187310279/photo/brown-leather-shoe.jpg?s=612x612&w=0&k=20&c=N-G1SP8dDojp3M_ykS7tQuYI8OVPWM0XA8_knBiWRtY=",
    name:"Shoes",
    size:"10",
    price:"899"

  },

  {
    url:"https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Watch",
    size:"23",
    price:"1099"

  },
])

const [cart, setCart] = useState([])

const [showCart, setShowCart] = useState(false)




const handleAddCart = (data) => {
  setCart([...cart, {...data, quantity: 1}])
  console.log(product);
}

const handleShow = (value) => {
setShowCart(value)

let newCartData = localStorage.getItem('cart')
if(newCartData === []){
  return []
} else{
  return newCartData;
}
}


const handleDelete = ( index)=>{
  const rows = [...cart];
        rows.splice(index, 1);
        setCart(rows);
}




useEffect(() => {
localStorage.setItem('cart', JSON.stringify(product))
}, [])

  return (

    <div className="App">
    <Header count={cart.length} handleShow={handleShow}/>

{
  showCart ?
  <CartList cart={cart} handleDelete={handleDelete}/>:
  <ProductList product={product} handleAddCart={handleAddCart} 

  />
}
 </div>
  );
}

export default App;