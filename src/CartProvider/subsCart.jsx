import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const subsCart = () => {
    const axiosSecure=useAxiosSecure()

    const {data:subsData=[]}=useQuery(
      {
          queryKey: ['subscriber'],
          queryFn: async () => {
              const res = await axiosSecure.get('http://localhost:5000/subscriber')
              return res.data;
            },
  
      }
    )
    return [subsData];
};

export default subsCart;