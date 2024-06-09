import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const UseCart = () => {

    const axiosSecure=useAxiosSecure()



  const {data:user=[]}=useQuery(
    {
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
          },

    }
  )
  return [cart];
};

export default UseCart;