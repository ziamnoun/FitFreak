import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const posrCart = () => {
    const postAxiosSecure=useAxiosSecure()




   
  const {data:postData=[]}=useQuery(
    {
        queryKey: ['allpost'],
        queryFn: async () => {
            const res = await postAxiosSecure.get('http://localhost:5000/allpost')
            return res.data;
          },

    }
  )
  return [postData];
};

export default posrCart;