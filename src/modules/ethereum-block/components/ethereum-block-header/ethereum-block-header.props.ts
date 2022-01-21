import { State } from '@store';
import { blockNumberHexToDec } from '@core';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';

/**
 * Use Ethereum Block Header
 */
const useEthereumBlockHeader = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { selectedBlock } = useSelector((state: State) => state.ethereumBlock);

  const selectedBlockNumber = useMemo(
    () =>
      isNaN(+(params.id as string))
        ? blockNumberHexToDec(selectedBlock?.number as string)
        : params.id,
    [params, selectedBlock]
  );

  const onArrowLeftClick = () => {
    navigate(`/block/${+(selectedBlockNumber as string) - 1}`);
  };

  const onArrowRightClick = () => {
    navigate(`/block/${+(selectedBlockNumber as string) + 1}`);
  };

  const onLatestClick = () => {
    navigate('/block/latest');
  };

  return {
    selectedBlockNumber,
    onArrowLeftClick,
    onArrowRightClick,
    onLatestClick
  };
};

export { useEthereumBlockHeader };
