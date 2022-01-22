import { State } from '@store';
import { blockNumberHexToDec } from '@core';
import { useLayoutEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';

/**
 * Use Ethereum Block Header
 */
const useEthereumBlockHeader = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { loading, selectedBlock, latestBlockNumber } = useSelector(
    (state: State) => state.ethereumBlock
  );

  const [isLatestBlock, setIsLatestBlock] = useState<boolean>();

  const selectedBlockNumber = useMemo(
    () =>
      isNaN(+(params.id as string))
        ? blockNumberHexToDec(selectedBlock?.number as string)
        : params.id,
    [params, selectedBlock]
  );

  const onArrowLeftClick = () => {
    if (loading || +(selectedBlock?.number as string) === 0) return;

    navigate(`/block/${+(selectedBlockNumber as string) - 1}`);
  };

  const onArrowRightClick = () => {
    if (loading || isLatestBlock) return;

    navigate(`/block/${+(selectedBlockNumber as string) + 1}`);
  };

  const onLatestClick = () => {
    navigate('/block/latest');
  };

  useLayoutEffect(() => {
    if (!params.id || !selectedBlock) return;

    setIsLatestBlock(
      params.id === 'latest' || selectedBlock?.number === latestBlockNumber
    );
  }, [params, latestBlockNumber, selectedBlock]);

  return {
    loading,
    isFirstBlock: +(selectedBlock?.number as string) === 0,
    isLatestBlock,
    selectedBlockNumber,
    onArrowLeftClick,
    onArrowRightClick,
    onLatestClick
  };
};

export { useEthereumBlockHeader };
