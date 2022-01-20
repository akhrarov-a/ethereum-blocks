import { useEffect } from 'react';
import { useParams } from 'react-router';

/**
 * Use Ethereum Block
 */
const useEthereumBlock = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return { params };
};

export { useEthereumBlock };
