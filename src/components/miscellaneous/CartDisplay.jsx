/*

[
  {
    product: Product;
    quatity: int;
  }
]

*/

// import { dummyProducts } from '../../data/dummyProducts';

// const dummyCart = [
//   {
//     product: dummyProducts[0],
//     quantity: 3,
//   },
//   {
//     product: dummyProducts[1],
//     quantity: 1,
//   },
// ];

function CartDisplay({ cart }) {
  return (
    <div>
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>You have nothing in your cart!</p>
      ) : (
        <ul>
          {cart.map((productWithQuantity) => {
            return (
              <li key={productWithQuantity.product.id}>
                {productWithQuantity.quantity}x{' '}
                {productWithQuantity.product.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CartDisplay;
