/* eslint-disable react/prop-types */
import QuantitySelector from '../miscellaneous/QuantitySelector';

function ProductListing({ product, textSize, addQuantityToProduct }) {
  return (
    <td>
      <div style={{ border: '1px solid black', width: '70vw' }}>
        <img
          style={{
            maxWidth: 300,
          }}
          src={product.image}
        />
        <div
          style={{
            marginLeft: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2>{product.name}</h2>
          <h4>
            {product.manufacturer} - ${product.price}
          </h4>
          <p style={{ fontSize: textSize }}>{product.description}</p>
        </div>
        <QuantitySelector
          addQuantity={(quantityToAdd) => {
            addQuantityToProduct(product, quantityToAdd);
          }}
        />
      </div>
    </td>
  );
}

export default ProductListing;
