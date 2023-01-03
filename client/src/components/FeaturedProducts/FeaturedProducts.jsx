import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );

  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      img2: 'https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Long Sleeve T-shirt',
      isNew: 'true',
      oldPrice: 19,
      price: 10,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Coat',
      isNew: 'true',
      oldPrice: 19,
      price: 10,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      img2: '',
      title: 'Long Sleeve T-shirt',
      isNew: 'true',
      oldPrice: 19,
      price: 10,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/1353503/pexels-photo-1353503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      img2: '',
      title: 'Shirt',
      isNew: 'true',
      oldPrice: 19,
      price: 10,
    },
  ];
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h2>{type} products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className='bottom'>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
