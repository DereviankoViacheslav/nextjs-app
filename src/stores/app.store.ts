import { create } from 'zustand';

// interface RequestData {
//   result: string;
//   documentation: string;
//   terms_of_use: string;
//   time_last_update_unix: number;
//   time_last_update_utc: string;
//   time_next_update_unix: number;
//   time_next_update_utc: string;
//   base_code: string;
//   conversion_rates: ConversionRates;
// }

// interface ConversionRates {
//   UAH: number;
//   EUR: number;
//   USD: number;
//   BGN: number;
//   CZK: number;
//   GBP: number;
//   JEP: number;
//   JPY: number;
// }

// const currencyAvailableNames = [
//   'UAH',
//   'EUR',
//   'USD',
//   'BGN',
//   'CZK',
//   'GBP',
//   'JEP',
//   'JPY',
// ];

type CurrenciesRate = {
  [currency: string]: { name: string; rate: number };
};

export type State = {
  currenciesRate: CurrenciesRate;
  currencyNames: string[];
  sellCurrency: string;
  buyCurrency: string;
  sellAmount: number;
  buyAmount: number;
  selectedDate: Date;
  // fetchData: () => void;
  setCurrenciesRate: (currenciesRate: CurrenciesRate) => void;
  setCurrencyNames: (names: string[]) => void;
  setSelectedDate: (date: Date) => void;
  setSellAmount: (amount: number) => void;
  setSellCurrency: (currency: string) => void;
  setBuyAmount: (amount: number) => void;
  setBuyCurrency: (currency: string) => void;
};

// const countAmount = (sellAmount: number, buyAmount: number) => {
//   return +(sellAmount * buyAmount).toFixed(2);
// };

export const useAppStore = create<State>((set, get) => ({
  currenciesRate: {
    UAH: {
      name: 'UAH',
      rate: 1,
    },
    USD: {
      name: 'UAH',
      rate: 38,
    },
  },
  currencyNames: [],
  selectedDate: new Date(),
  sellCurrency: '',
  buyCurrency: '',
  sellAmount: 0,
  buyAmount: 0,
  setCurrenciesRate: (rates: CurrenciesRate) => set({ currenciesRate: rates }),
  setCurrencyNames: (names: string[]) => set({ currencyNames: names }),
  setSelectedDate: (date: Date) => set({ selectedDate: date }),
  setSellAmount: (amount: number) => set(() => ({ sellAmount: amount })),
  setSellCurrency: (currency: string) => set({ sellCurrency: currency }),
  setBuyAmount: (amount: number) => set({ buyAmount: amount }),
  setBuyCurrency: (currency: string) => set({ buyCurrency: currency }),
  // fetchData: async () => {
  //   // const state = get();
  //   // const currentCurrency = state.sellCurrency;
  //   // const year = state.selectedDate.getFullYear();
  //   // const month = state.selectedDate.getMonth();
  //   // const day = state.selectedDate.getDate();

  //   // const res = await fetch(
  //   //   `https://v6.exchangerate-api.com/v6/211274c39d35699b2bc86458/history/${currentCurrency}/${year}/${month}/${day}`,
  //   // );

  //   const res = await fetch(
  //     `https://v6.exchangerate-api.com/v6/211274c39d35699b2bc86458/latest/UAH`,
  //   );

  //   if (!res.ok) throw new Error('Failed to fetch data');

  //   const data: RequestData = await res.json();

  //   const currencies: [string, number][] = Object.entries(
  //     data.conversion_rates,
  //   ).filter(([key]) => currencyAvailableNames.includes(key));

  //   const currencyNames = currencies.map(([key]) => key);

  //   const currenciesRate: currenciesRate = {};

  //   currencies.forEach(([key, value]) => {
  //     currenciesRate[key] = { name: key, rate: value };
  //   });

  //   const sellCurrency = data.base_code;
  //   const buyCurrency = sellCurrency === 'UAH' ? 'USD' : 'UAH';
  //   const buyAmount = countAmount(currenciesRate[sellCurrency].rate, currenciesRate[buyCurrency].rate);

  //   set({
  //     currenciesRate,
  //     currencyNames,
  //     sellCurrency,
  //     buyCurrency,
  //     buyAmount,
  //   });
  // },
}));
