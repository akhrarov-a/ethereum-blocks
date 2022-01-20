import { useMeta } from '@core';
import { useParams } from 'react-router';

/**
 * Use Ethereum Block
 */
const useEthereumBlock = () => {
  const params = useParams();

  useMeta(
    {
      title: `Ethereum Block#${params.id} | Etherscan`
    },
    [params]
  );

  return { params };
};

export { useEthereumBlock };
