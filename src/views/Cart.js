import React, { useEffect/* , useState  */} from 'react'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'


const Cart = ({ cart,/*  setCart, handleChange, */ item = [] }) => {
/*   const [price, setPrice] = useState(0); */

/*   const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  }; */

/*   const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  }; */

/*   useEffect(() => {
    handlePrice();
  });
   */
  return (
    <>
      <NavBar />
      <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.articleNumber}>
          <div className="cart_img">
            <img src={item.imageName} alt="asd" />
            <p>{item.name}</p>
          </div>
{/*           <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div> */}
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        {/* <span>Rs - {price}</span> */}
      </div>
    </article>
      <Footer />
    </>

  )
}

export default Cart