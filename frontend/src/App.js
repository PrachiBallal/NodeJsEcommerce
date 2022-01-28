import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">amazona</a>
            </div>
            <div>
                <a href="/cart"> Cart </a>
                <a href="/signin"> Sign In </a>
            </div>
        </header>
        <main>
            <div className="row center">
              {data.product.map((product)=> (
                <div key={product.id} className='card'>
                      <a href={`/product/${product._id}`}>
                        <img 
                        className="medium" 
                        src={product.image} 
                        alt={product.name} />
                      </a>
                      <div className="card-body">
                          <a href={`/product/${product._id}`}><h2>{product.name}</h2></a>
                          <div className="ratings">
                              <span><i className="fa fa-star"></i></span>
                              <span><i className="fa fa-star"></i></span>
                              <span><i className="fa fa-star"></i></span>
                              <span><i className="fa fa-star-o"></i></span>
                              <span><i className="fa fa-star-o"></i></span>
                          </div>
                          <div className="price"><span className="currency">{'\u20A8'}.</span> {product.price}</div>
                      </div>
                  </div>
              ))}
            </div>
        </main>
        <footer className="row center">
            All rights reserved
        </footer>
    </div>
  );
}
export default App;
