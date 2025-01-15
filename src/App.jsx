import { useState } from 'react';
import CartDisplay from './components/miscellaneous/CartDisplay';
import Table from './components/productTable/Table';
import { dummyProducts } from './data/dummyProducts';

/*
What cares about the state of our cart?

  App <- Put cart state here
    Table
      SearchBar
      Group Of
        ProductListing ,- YES (add to cart)
        ProductListing
        ...
    CartDisplay <- YES (see current items, remove items)
*/

/*

[
  {
    product: Product;
    quatity: int;
  }
]

*/

function App() {
  const [cart, setCart] = useState([]);

  function addQuantityToProduct(product, quantityToAdd) {
    console.log('addQuantityToProduct', product.id, quantityToAdd);

    let found = false;

    for (let i = 0; i < cart.length; i++) {
      const productWithQuantity = cart[i];
      if (productWithQuantity.product.id === product.id) {
        productWithQuantity.quantity += quantityToAdd;
        found = true;
        break;
      }
    }

    if (!found) {
      setCart([
        ...cart,
        {
          product: product,
          quantity: quantityToAdd,
        },
      ]);
      return;
    }

    setCart([...cart]);
  }

  return (
    <div>
      <Table
        data={dummyProducts}
        addQuantityToProduct={addQuantityToProduct}
        // addProduct
      ></Table>
      <CartDisplay cart={cart} />
    </div>
  );
}

export default App;
