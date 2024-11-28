import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import OrderSummary from './OrderSummary';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/features/cart/cartSlice';



const CartModal = ({products, isOpen, onClose}) => {
    const dispatch = useDispatch();

    const handleQunatity = (type, id) => {
        const payload = {type, id}
        dispatch(updateQuantity(payload))
    }

    const handleRemoveFromCart = (e, id) => {
        e.preventDefault()
        dispatch(removeFromCart({id}))
    }
    
    
  return (
    <div className={`fixed z-[1000] inset-0 bg-black bg-opacity-50 transition-opacity
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    style={{transition: 'opacity 300ms'}}>
        
        <div className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto
            transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{transition:'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}>

                <div className='p-4 mt-4'>
                    <div className='flex justify-between items-center mb-4'>
                        <h4 className='text-xl font-semibold'>Your Cart</h4>
                        <button onClick={() => onClose()} 
                                className='text-black hover:text-white hover:bg-red-700'>
                                <RiCloseLargeFill className='w-5 h-5'/>
                        </button>
                    </div>

{/* Cart Details */}
                    <div className='cart-items'>
                        {
                            products.length === 0 ? (<div>Your cart is empty</div>) 
                            : (products.map((item, index) => (
                                <div key={index} className='flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4'>
                                    <div className='flex items-center'>
                                        <span className='mr-4 px-1 bg-red-700 rounded-br-xl rounded-bl-xl text-white'>0{index + 1}</span>
                                        <img src={item.image} alt="" className='size-12 object-cover mr-4' />
                                        <div>
                                            <h5 className='text-lg font-medium'>{item.name}</h5>
                                            <p className='text-gray-500 text-sm'>${Number(item.price).toFixed(2)}</p>
                                        </div>

                                        <div className='flex flex-row md:justify-start justify-end items-center mt-2'>
                                            <button onClick={() => handleQunatity('decreament', item._id)} className='size-8 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-red-700 hover:text-white ml-8'><BsCartDash className='size-8' /></button>
                                            <span className='px-2 text-center mx-1'>{item.quantity}</span>
                                            <button onClick={() => handleQunatity('increament', item._id)} className='size-8 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-green-700 hover:text-white'><BsCartPlus className='size-8' /></button>
                                        </div>

                                        <div className='ml-5'>
                                            <button onClick={(e) => handleRemoveFromCart(e, item._id)} className='text-red-400 hover:text-red-700 mr-4'>Remove</button>
                                        </div>

                                    </div>
                                </div>
                               ))
                            )
                        }
                    </div>

            {/* Calculation */}
                    {
                        products.length > 0 && (
                            <OrderSummary />
                        )
                    }

                </div>
        </div>
    </div>
  )
}

export default CartModal