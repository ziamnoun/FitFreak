// import React, { useContext, useEffect, useState } from 'react';
// import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
// import { useLocation } from 'react-router-dom';

// const stripePromise = loadStripe(import.meta.env.VITE_MONEY); 

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret,setClientSecret]=useState('')
//   const {user}=useContext(AuthContext);
//   const location = useLocation();
//   const axiosSecure=useAxiosSecure();

//   const { price, trainerId, selectedPackage } = location.state || {};
//   console.log(price, trainerId, selectedPackage)

//   useEffect(()=>{
//     axiosSecure.post('http://localhost:5000/create-payment-intent')
//     .then(res=>{
//         console.log(res.data.clientSecret);
//         console.log('hi');
//         setClientSecret(res.data.clientSecret);
//     })

//   },[axiosSecure,price])

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
//     } else {
//       console.log('[PaymentMethod]', paymentMethod);
//     }



//     //confirming payment
//     const {paymentIntent,error: confirmError}=await stripe.confirmCardPayment(clientSecret,{
//         payment_method:{
//             card:card,
//             billing_details:{
//                 email:user?.email || 'Unknown',
//                 Name:user?.displayName || 'Unknown', 
//             }
//         }
//     })

//     if(confirmError){
//         console.log('Confirm Error')
//     }
//     else{
//         console.log('payment intent',paymentIntent)
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
//         </form>
//       </div>
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

const stripePromise = loadStripe(import.meta.env.VITE_MONEY);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
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
      // Handle post-payment logic (e.g., storing payment details, updating user membership, etc.)
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
        </form>
      </div>
    </div>
  );
};

const Payment = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default Payment;

