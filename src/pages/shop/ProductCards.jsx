import react from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import RatingStars from '../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice'


const ProductCards = ({products}) => {
      const dispatch = useDispatch();

      const handleAddToCart = (product) => {
            dispatch(addToCart(product))
      }

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3
    lg:grid-cols-4 gap-8"
    >
      {products.map((product, index) => (
        <div key={index} className="product__card shadow-sm">
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img src={product.image} alt="product image" className="" />
            </Link>

            <div className="hover:block absolute top-3 right-3">
              <button onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product)
                }}>
                <TiShoppingCart className="text-red-700 bg-stone-200 h-8 w-8 
                rounded-br-xl rounded-bl-xl hover:text-stone-200 hover:bg-red-700
                transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Product description */}
          <div className="product__card__content">
            <h4>{product.name}</h4>
            <p>
              ${product.price}{' '}
              {product?.oldPrice ? (
                <s className="text-red-700">${product.oldPrice}</s>
              ) : null}
            </p>
          </div>

          <RatingStars rating={product.rating} />
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
