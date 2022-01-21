import { blockNumberDecToHex, useMeta } from '@core';
import { getEthereumBlock } from '@ethereum-block/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';

/**
 * Use Ethereum Block
 */
const useEthereumBlock = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useMeta(
    {
      title: `Ethereum Block#${params.id} | Etherscan`
    },
    [params]
  );

  useEffect(() => {
    if (!params.id) return;

    const number = isNaN(+params.id)
      ? params.id
      : blockNumberDecToHex(params.id);

    dispatch(getEthereumBlock(number));
  }, [params]);

  return {};
};

export { useEthereumBlock };
