import './style.css';
import {ProductContext}  from '../../ProductContext';
import { useContext } from 'react';
export function Cards() {

  const { product, loading, error } = useContext(ProductContext);
  console.log(product, 'mu');
  const products = Array.isArray(product) ? product : [product];

  return (
    <div className='wrapper-cards'>

  

      <div className="cards">
        <img className='sweet-image' src="https://plus.unsplash.com/premium_photo-1695028377519-70fb0c385db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRpcmFtaXN1fGVufDB8fDB8fHww" alt="" />

        {products.map((product, i) => (
       <div key={i  } className='text-container'>

        
       <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Calories: {product.calories}</p>
      <p>Price: ${product.price}</p>
       </div>
          ))}
      </div>
     
 
    </div>
  )
}