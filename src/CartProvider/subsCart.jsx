import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';

const subsCart = () => {
    const subsaxiosSecure=useAxiosSecure()

    const {data:subsData=[]}=useQuery(
      {
          queryKey: ['subscriber'],
          queryFn: async () => {
              const res = await subsaxiosSecure.get('https://final-project-fit-server.vercel.app/subscriber')
              return res.data;
            },
  
      }
    )
    return [subsData];
};

export default subsCart;