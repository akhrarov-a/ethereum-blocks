import { useParams } from 'react-router';

/**
 * Use Ethereum Block
 */
const useEthereumBlock = () => {
  const params = useParams();

  return { params };
};

export { useEthereumBlock };
