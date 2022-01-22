import { blockNumberDecToHex, useMeta } from '@core';
import { getEthereumBlock } from '@ethereum-block/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

/**
 * Use Ethereum Block
 */
const useEthereumBlock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!params.id) return;

    const isValidParam =
      !isNaN(+params.id) || (isNaN(+params.id) && params.id === 'latest');

    if (!isValidParam) {
      navigate('/block/latest');

      return;
    }

    const number = isNaN(+params.id)
      ? 'latest'
      : blockNumberDecToHex(params.id);

    dispatch(getEthereumBlock(number));
  }, [params]);

  useMeta(
    {
      title: `Ethereum Block#${params.id} | Etherscan`
    },
    [params]
  );

  return {};
};

export { useEthereumBlock };
