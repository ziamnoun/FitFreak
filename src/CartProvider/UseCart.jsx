import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const UseCart = () => {

    const axiosSecure=useAxiosSecure()

    const {data:userData=[]}=useQuery(
      {
          queryKey: ['user'],
          queryFn: async () => {
              const res = await axiosSecure.get('https://final-project-fit-server.vercel.app/user')
              return res.data;
            },
  
      }
    )
    return [userData];
  };





export default UseCart;