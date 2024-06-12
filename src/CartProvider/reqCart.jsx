import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const reqCart = () => {

    const reqAxiosSecure=useAxiosSecure()




   
  const {data:reqData=[]}=useQuery(
    {
        queryKey: ['request'],
        queryFn: async () => {
            const res = await reqAxiosSecure.get('https://final-project-fit-server.vercel.app/request')
            return res.data;
          },

    }
  )
  return [reqData];
};

export default reqCart;