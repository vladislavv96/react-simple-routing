import React, { useEffect, useState } from 'react'
import './App.css';

function Item({match}) {

  const [item, setItem] = useState([]);

  useEffect(() => fetchItem())

  const fetchItem = async () => {
    const fetchedItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
    const item = await fetchedItem.json();
    setItem(item)
  }
  return (
    <div>
        <h1>{item.title}</h1>
        <img width='100px' src={item.image} alt="img" />
        <div className="desc">{item.description}</div>
    </div>
  );
}

export default Item;
