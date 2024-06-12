import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const UsePayCart = () => {

    const axiosSecure=useAxiosSecure()

    const {data:userPayData=[]}=useQuery(
      {
          queryKey: ['user'],
          queryFn: async () => {
              const res = await axiosSecure.get('https://final-project-fit-server.vercel.app/payments')
              return res.data;
            },
  
      }
    )
    return [userPayData];
  };





export default UsePayCart;