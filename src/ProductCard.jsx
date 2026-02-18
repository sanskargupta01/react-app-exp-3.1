import './ProductCard.css';

const ProductCard = ({ name, price, inStock }) => {
  return (
    <div className="product-card">
      {/* Grey placeholder box from the experiment preview */}
      <div className="image-placeholder"></div>
      
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">${price}</p>
        
        {/* Conditional Rendering for Stock Status */}
        <span className={`status-badge ${inStock ? 'in-stock' : 'out-of-stock'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;