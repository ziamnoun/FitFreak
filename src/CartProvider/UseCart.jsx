import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const UseCart = () => {

    const axiosSecure=useAxiosSecure()



  const {data:userData=[]}=useQuery(
    {
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:5000/user')
            return res.data;
          },

    }
  )
  return [userData];
};

export default UseCart;