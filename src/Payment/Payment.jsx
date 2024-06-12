
// import React, { useContext, useEffect, useState } from 'react';
// import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// const stripePromise = loadStripe(import.meta.env.VITE_MONEY);

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');
//   const [transactionId, setTransactionId] = useState('');
//   const { user } = useContext(AuthContext);
//   const location = useLocation();
//   const axiosSecure = useAxiosSecure();

//   const { price, trainerId, selectedPackage } = location.state || {};
//   console.log(price, trainerId, selectedPackage);

//   useEffect(() => {
//     if (price) {
//       axiosSecure.post('http://localhost:5000/create-payment-intent', { money: price })
//         .then(res => {
//           console.log(res.data.clientSecret);
//           setClientSecret(res.data.clientSecret);
//         })
//         .catch(error => {
//           console.error('Error creating payment intent:', error);
//         });
//     }
//   }, [axiosSecure, price]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card,
//     });

//     if (error) {
//       console.log('[error]', error);
//       return;
//     } else {
//       console.log('[PaymentMethod]', paymentMethod);
//     }

//     // Confirming payment
//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: card,
//         billing_details: {
//           email: user?.email || 'Unknown',
//           name: user?.displayName || 'Unknown',
//         },
//       },
//     });

//     if (confirmError) {
//       console.log('Confirm Error', confirmError);
//     } else {
//       console.log('Payment Intent', paymentIntent);
//       if (paymentIntent.status === 'succeeded') {
//         console.log('Transaction ID:', paymentIntent.id);
//         setTransactionId(paymentIntent.id);
//         //saving payment info-
//         const paymentInfo={
//             email:user.email,
//             price:price,
//             date: new Date(),
//             trainerId:trainerId,
//             selectedPackage:selectedPackage,
//             trainerId:paymentIntent.id,
//             status:'Paid'
//         }
//         try {
//             const res = await axiosSecure.post('http://localhost:5000/payments', paymentInfo);
//             console.log('Payment saved:', res);
//             toast.success('Successfully paid');
//           } catch (saveError) {
//             console.error('Error saving payment info:', saveError);
//           }
//         // toast.success("Successfully paid")






//       }
//     }
//   };

//   const cardElementOptions = {
//     style: {
//       base: {
//         color: '#ffffff',
//         fontSize: '16px',
//         '::placeholder': {
//           color: '#a0aec0',
//         },
//       },
//       invalid: {
//         color: '#ff4d4f',
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-transparent flex items-center justify-center text-white">
//       <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold">Payment Page</h1>
//         <p className="text-xl">Amount to Pay: ${price}</p>
//         <p className="text-lg">Package: {selectedPackage}</p>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium">
//               Card Details
//             </label>
//             <CardElement
//               className="w-full p-2 mt-1 border rounded-md bg-gray-800 border-gray-700"
//               options={cardElementOptions}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 mt-4 font-semibold text-black bg-yellow-500 rounded-md hover:bg-yellow-600"
//             disabled={!stripe || !elements || !clientSecret}
//           >
//             Pay Now
//           </button>
//           {transactionId && <p className='text-green-500'>Your Transaction ID is {transactionId}</p>}
//         </form>
//       </div>
//       <Toaster
//   position="top-right"
//   reverseOrder={false}
// />
//     </div>
//   );
// };

// const Payment = () => (
//   <Elements stripe={stripePromise}>
//     <PaymentForm />
//   </Elements>
// );

// export default Payment;



import React, { useContext, useEffect, useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const stripePromise = loadStripe(import.meta.env.VITE_MONEY);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const { price, trainerId, selectedPackage } = location.state || {};
  console.log(price, trainerId, selectedPackage);

  useEffect(() => {
    if (price) {
      axiosSecure.post('http://localhost:5000/create-payment-intent', { money: price })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch(error => {
          console.error('Error creating payment intent:', error);
        });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      return;
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    // Confirming payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'Unknown',
          name: user?.displayName || 'Unknown',
        },
      },
    });

    if (confirmError) {
      console.log('Confirm Error', confirmError);
    } else {
      console.log('Payment Intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('Transaction ID:', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // Saving payment info
        const paymentInfo = {
          email: user.email,
          price: price,
          date: new Date(),
          trainerId: trainerId,
          selectedPackage: selectedPackage,
          transactionId: paymentIntent.id,
          status: 'Paid'
        };

        try {
          const res = await axiosSecure.post('http://localhost:5000/payments', paymentInfo);
          console.log('Payment saved:', res);
          toast.success('Successfully paid');
        } catch (saveError) {
          console.error('Error saving payment info:', saveError);
        }
      }
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        color: '#ffffff',
        fontSize: '16px',
        '::placeholder': {
          color: '#a0aec0',
        },
      },
      invalid: {
        color: '#ff4d4f',
      },
    },
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Payment Page</h1>
        <p className="text-xl">Amount to Pay: ${price}</p>
        <p className="text-lg">Package: {selectedPackage}</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">
              Card Details
            </label>
            <CardElement
              className="w-full p-2 mt-1 border rounded-md bg-gray-800 border-gray-700"
              options={cardElementOptions}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-black bg-yellow-500 rounded-md hover:bg-yellow-600"
            disabled={!stripe || !elements || !clientSecret}
          >
            Pay Now
          </button>
          {transactionId && <p className='text-green-500'>Your Transaction ID is {transactionId}</p>}
        </form>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

const Payment = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default Payment;


