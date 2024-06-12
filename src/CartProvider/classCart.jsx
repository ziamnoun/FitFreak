import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const classCart = () => {
    const subsaxiosSecure=useAxiosSecure()

    const {data:classData=[]}=useQuery(
      {
          queryKey: ['allclass'],
          queryFn: async () => {
              const res = await subsaxiosSecure.get('http://localhost:5000/allclass')
              return res.data;
            },
  
      }
    )
    return [classData];
};

export default classCart;