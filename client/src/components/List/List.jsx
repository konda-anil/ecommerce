import React from 'react';
import './List.scss';
import Card from '../Card/Card';
// import useFetch from "../../hooks/useFetch";

const List = ({ maxPrice, sort, catId }) => {
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
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );

  return (
    <div className='list'>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
