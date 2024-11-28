import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { clearCart } from '../../redux/features/cart/cartSlice';
import {loadStripe} from '@stripe/stripe-js'
import { getBaseUrl } from '../../utils/baseURL';





const OrderSummary = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)

    const handleClearCart = () => {dispatch(clearCart())}


    const products = useSelector((store) => store.cart.products);
    
    const {tax, taxRate, totalPrice, grandTotal, selectedItems} = useSelector((store) => store.cart);

    // Payment Integration
    const makePayment = async (e) => {
          const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK); //the publishable key from STRIP
          const body = {
            products: products,
            userId: user?._id
          }

          const headers = {
            'Content-Type': "application/json"
          }

          const response = await fetch(`${getBaseUrl()}/api/orders/create-checkout-session`, {
            method: 'POST', 
            headers: headers,
            body: JSON.stringify(body)
          })
          
          const session = await response.json()
          console.log('session:', session);

          const result = stripe.redirectToCheckout({
            sessionId: session.id
          })
          console.log('Result:', result);
          if(result.error) {
            console.log('Error:', result.error)
          }
    }


  return (
    <div className='bg-gray-200 mt-5 rounded text-base'>
       <div className='px-6 py-4 space-y-5'>
            <h2 className='text-xl'>Order Summary</h2>
            <p className='text-text-dark mt-2'>Selected Items: {selectedItems}</p>
            <p className='font-bold'>Total Price: <span>${totalPrice.toFixed(2)}</span></p>
            <p className='font-bold'>Tax({taxRate * 100}%) : <span className='text-red-700'>${tax.toFixed(2)}</span></p>
            <h3 className='font-bold'>GrandTotal: <span className='font-bold text-green-600 underline'>${grandTotal.toFixed(2)}</span></h3>
            
            <div className='px-4 mb-6'>
                <button 
                    onClick={(e) => {e.stopPropagation(); handleClearCart();}} 
                    className='bg-red-700 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4'>
                        Clear Cart<RiDeleteBin2Fill className='ml-1.5' />
                </button>
                
                <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      makePayment();
                    }}
                    className='bg-green-700 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4'>
                    Proceed Checkout<MdOutlinePayment className='ml-1.5' />
                </button>
            </div>
       </div>
    </div>
  )
}

export default OrderSummary