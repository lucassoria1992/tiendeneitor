import React, {useEffect, useState } from 'react';
import ProductItemCard from './Components/Card';
import {Container} from 'react-bootstrap'
import Navbar from './Components/NavBar';

function App() {

  const API_URL = 'https://fakestoreapi.com/products';

  const [productItem, setproductItem] = useState();

  const FetchProducts = (url) => {
  fetch(url)
  .then(res => res.json())
  .then(data => setproductItem(data)) 
  .catch(error => console.log(error))
  }

  useEffect(() => {
    FetchProducts(API_URL)
  }, []);


  return (
    
    <>
    <div className="App " >
    
    <Navbar  />

    <Container className="mt-3">
      <ProductItemCard productItems = {productItem} />
    </Container>
    </div>
    </>
  );
}

export default App;
