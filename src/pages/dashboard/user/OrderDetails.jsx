import React from 'react'
import {useGetOrderByIdQuery} from '../../../redux/features/orders/orderApi' 
import { useParams } from 'react-router-dom';
import TimelineStep from '../../../components/TimelineStep';
import { MdOutlineTimer } from "react-icons/md";
import { RiLoaderLine } from "react-icons/ri";
import { AiOutlineTruck } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";


const OrderDetails = () => {
    const { orderId } = useParams();
    console.log(orderId)
    const { data: order, error, isLoading } = useGetOrderByIdQuery(orderId);
  
    if(isLoading) return <div>Loading...</div>
    if(error)  return <div>No orders!</div>

    
    const isCompleted = (status) => {
        const statuses = ["pending", "processing", "shipped", "completed"];
        return statuses.indexOf(status) < statuses.indexOf(order.status)
    }

    const isCurrent = (status) => order.status ===  status;
    const steps = [
        {
          status: 'pending',
          label: 'Pending',
          description: 'Your order has been created and is awaiting processing.',
          icon: { iconName: <MdOutlineTimer className=''/>},
        },
        {
          status: 'processing',
          label: 'Processing',
          description: 'Your order is currently being processed.',
          icon: { iconName: <RiLoaderLine className=''/>},
        },
        {
          status: 'shipped',
          label: 'Shipped',
          description: 'Your order has been shipped.',
          icon: { iconName: <AiOutlineTruck className=''/>},
        },
        {
          status: 'completed',
          label: 'Completed',
          description: 'Your order has been successfully completed.',
          icon: { iconName: <IoBagCheckOutline className=''/> },
        },
      ];
    
    return (
    <section className='section__container rounded p-6 pt-40'>
        <h2 className='text-2xl font-semibold mb-4'>Order {order?.status}</h2>
        <p className='mb-4'>Order Id: {order?.orderId}</p>
        <p className='mb-8'>Status: {order?.status}</p>

        <ol className='sm:flex items-center relative'>
            {
               steps.map((step, index) => (
                <TimelineStep
                key={index}
                step={step}
                order={order}
                isCompleted={isCompleted(step.status)}
                isCurrent={isCurrent(step.status)}
                isLastStep = {index === steps.length - 1}
                icon={step.icon}
                description={step.description}
                />
               )) 
            }
        </ol>
        
    </section>
    )
}

export default OrderDetails