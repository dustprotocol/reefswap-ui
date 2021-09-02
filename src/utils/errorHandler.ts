import { toast } from 'react-toastify';

const chainErrors: {[key: string]: string} = {
  INVALID_TO: 'Invalid to address',
  EXPIRED: 'Transaction time expired',
  PAIR_EXISTS: 'Pool pair already exist',
  ZERO_ADDRESS: 'Zero address  was passed',
  IDENTICAL_ADDRESSES: 'Equal addresses picked',
  INSUFFICIENT_A_AMOUNT: 'Insufficient first token amount',
  INSUFFICIENT_B_AMOUNT: 'Insufficient second token amount',
  INSUFFICIENT_LIQUIDITY: 'Insufficient liquidity',
  INSUFFICIENT_INPUT_AMOUNT: 'Insufficient sell amount',
  INSUFFICIENT_OUTPUT_AMOUNT: 'Insufficient buy amount',
  INSUFFICIENT_LIQUIDITY_MINTED: 'Insufficient liquidity minted',
  INSUFFICIENT_LIQUIDITY_BURNED: 'Insufficient liquidity burned',
  InsufficientBalance: 'Account Reef token balance is too low',
  LiquidityRestrictions: 'Insufficient pool liquidity',
};

const errorHandler = (message: string): string => {
  const errorKey = Object
    .keys(chainErrors)
    .find((key) => message.includes(key));

  if (message.includes('execution revert: ReefswapV2: K: ')) {
    return 'Insufficient pool liquidity';
  }

  if (!errorKey) {
    return message;
  }

  return chainErrors[errorKey];
};

export const errorToast = (message: string): void => {
  toast.error(errorHandler(message));
};

export default errorHandler;
