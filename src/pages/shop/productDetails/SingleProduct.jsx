import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProductsData from '../../../data/products.json'
import RatingStars from '../../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import ReviewsCard from '../reviews/ReviewsCard';


const SingleProduct = () => {
    const {id} = useParams();
        
    const dispatch =  useDispatch();
    const {data, error, isLoading} = useFetchProductByIdQuery(id);
  

    const singleProduct = data?.product || {};
    const productReviews = data?.reviews || [];


    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading product details.</p>
    



  return (
    <>
    <section
        className="container section__container shadow-sm"
        style={{ marginTop: '154px' }}>
        <h2 className="section__header capitalize">Single Product Page</h2>
        <div className='section__subheader space-x-2 flex items-center justify-center text-red-700'>
            <span className=''><Link to='/'>Home</Link></span>
            <MdKeyboardDoubleArrowRight />
            <span className=''><Link to='/shop'>Shop</Link></span>
            <MdKeyboardDoubleArrowRight />
            <span className=''><Link to='/'>{singleProduct.name}</Link></span>
        </div>
    </section>

    <section className='section__container mt-8'>

        <div className='flex flex-col items-center md:flex-row gap-8'>
            {/* product image */}
            <div className='md:w-1/2 w-full'>
                <img src={singleProduct.image} 
                     alt=""
                     className='rounded-md w-full h-auto' />
            </div>

            <div className='md:w-1/2 w-full'>
                <h3 className='text-2xl font-semibold mb-4 '>{singleProduct.name}</h3>
                <p className='text-xl'>${singleProduct?.price} <s>{singleProduct?.oldPrice && <s className=' text-red-700'>${singleProduct?.oldPrice}</s>}</s></p>
                <p className='text-gray-400 mb-4'>{singleProduct?.description}</p>

                <div className='flex flex-col space-y-2'>
                    <p><strong>Category</strong> {singleProduct?.category}</p>
                    <p><strong>Color</strong> {singleProduct?.color}</p>
                    <div className='flex gap-1 items-center'>
                        <strong>Rating: </strong>
                        <RatingStars rating={singleProduct.rating} />
                    </div>
                </div>

                <button 
                onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(singleProduct)
                }}
                className='mt-6 px-6 py-3 bg-red-700 text-stone-200 rounded-md'>
                    Add to Cart
                </button>
            </div>
        </div>
    </section>

    {/* Display Reviews */}
    <section className='section__container mt-8'>
            <ReviewsCard productReviews = {productReviews} />
    </section>

    </>
  )
}

export default SingleProduct