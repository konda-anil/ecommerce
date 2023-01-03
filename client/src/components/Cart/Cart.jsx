import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import { useSelector } from 'react-redux';
// import { removeItem, resetCart } from '../../redux/cartReducer';
// import { useDispatch } from 'react-redux';
// import { makeRequest } from '../../makeRequest';
// import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  //   const products = useSelector((state) => state.cart.products);

  //   const dispatch = useDispatch();

  //   const totalPrice = () => {
  //     let total = 0;
  //     products.forEach((item) => {
  //       total += item.quantity * item.price;
  //     });
  //     return total.toFixed(2);
  //   };

  //   const stripePromise = loadStripe(
  //     "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
  //   );
  //   const handlePayment = async () => {
  //     try {
  //       const stripe = await stripePromise;
  //       const res = await makeRequest.post("/orders", {
  //         products,
  //       });
  //       await stripe.redirectToCheckout({
  //         sessionId: res.data.stripeSession.id,
  //       });

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      img2: 'https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Long Sleeve T-shirt',
      desc: 'Loream epsum lorum epsum',
      oldPrice: 19,
      price: 10,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Coat',
      desc: 'Loream epsum lorum epsum',
      oldPrice: 19,
      price: 10,
    },
  ];
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className='item' key={item.id}>
          <img src={item.img} alt='' />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>${item.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span> 1 * 1.99</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  );
};

export default Cart;
