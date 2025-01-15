import { useState } from 'react';

function QuantitySelector({ addQuantity }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{ marginLeft: 30, marginBottom: 30 }}>
      <button
        style={{ height: 25, width: 25 }}
        onClick={() => {
          setQuantity(quantity - 1);
        }}
      >
        -
      </button>
      <input
        type="number"
        style={{ width: 25 }}
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value, typeof e.target.value);
          const newQuantity = Number(e.target.value);
          if (Number.isNaN(newQuantity)) {
            console.error('invalid quantity', event.target.value);
            return;
          }
          setQuantity(newQuantity);
        }}
      ></input>
      <button
        style={{ height: 25, width: 25 }}
        onClick={() => {
          setQuantity(quantity + 1);
          // addQuantity(quantity);
        }}
      >
        +
      </button>
      <button
        style={{ marginLeft: 5 }}
        onClick={() => addQuantity(quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default QuantitySelector;
