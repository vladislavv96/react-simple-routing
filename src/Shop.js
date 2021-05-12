import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css';

function Shop() {

  const [items, setItems] = useState([]);
  const styles = {
    listStyle: 'none',
    color: 'black'
  }
  useEffect(() => {
    fetchItems()
    console.log(items);
  }, [])

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products?limit=10');
    const items = await data.json();
    setItems(items)
  }
  return (
    <div>
      <ul style={styles}>
        {items.map((item) => (
          <li key={item.id}>
            <Link style={styles} to={`/shop/${item.id}`}>
              {item.title}
            </Link>
          </li>          
        ))}
      </ul>
    </div>
  );
}

export default Shop;
