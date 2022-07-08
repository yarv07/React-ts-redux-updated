export type RatesPayload = {
  rates: {
    UAH: number;
    EUR: number;
    GBP: number;
    USD: number;
  };
  base: string;
};

export type ConverterPayload = {
  currencyTo: string;
  currencyFrom: string;
  amount: number;
};

export type ConverterType = {
  result: number;
};

export type UseStateType = {
  symbol: string;
  rate: number;
};
