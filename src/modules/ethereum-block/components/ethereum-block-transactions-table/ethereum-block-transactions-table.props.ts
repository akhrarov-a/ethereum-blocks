import { State } from '@store';
import { useSelector } from 'react-redux';

/**
 * Use Ethereum Block Transactions Table
 */
const useEthereumBlockTransactionsTable = () => {
  const { loading, selectedBlock } = useSelector(
    (state: State) => state.ethereumBlock
  );

  return {
    loading,
    selectedBlock
  };
};

export { useEthereumBlockTransactionsTable };
