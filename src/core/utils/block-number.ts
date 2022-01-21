/**
 * Block Number Hex To Dec
 */
const blockNumberHexToDec = (number: string) =>
  parseInt(number?.split('x')?.[1] as string, 16)?.toString(10);

/**
 * Block Number Dec To Hex
 */
const blockNumberDecToHex = (number: string) => `0x${(+number)?.toString(16)}`;

export { blockNumberDecToHex, blockNumberHexToDec };
