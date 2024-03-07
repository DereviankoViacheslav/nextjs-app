import { fetchData } from '@/api/actions';
import { create } from 'zustand';

export type CurrencyRates = {
    [currency: string]: { name: string; rate: number };
};

type HistoryItem = {
    date: Date;
    sellAmount: number;
    sellCurrency: string;
    buyAmount: number;
    buyCurrency: string;
};

type State = {
    isLoading: boolean;
    sellAmount: number;
    sellCurrency: string;
    buyAmount: number;
    buyCurrency: string;
    currencyNames: string[];
    currencyRates: CurrencyRates;

    conversionHistory: HistoryItem[];
    deleteConversionHistory: () => void;

    selectedDate: Date;
    setSelectedDate: (date: Date) => void;

    fetchDataStore: () => Promise<
        | {
              currencyRates: CurrencyRates;
              currencyNames: string[];
              sellCurrency: string;
              buyCurrency: string;
          }
        | Error
    >;

    updateStore: (
        sellAmount: number,
        buyAmount: number,
        sellCurrency: string,
        buyCurrency: string,
        selectedDate: Date,
    ) => void;
};

export const useAppStore = create<State>((set, get) => ({
    isLoading: true,
    sellAmount: 0,
    sellCurrency: '',
    buyAmount: 0,
    buyCurrency: '',
    currencyNames: [],
    currencyRates: {},

    conversionHistory: [],
    deleteConversionHistory: () => set({ conversionHistory: [] }),

    selectedDate: new Date(),
    setSelectedDate: (date: Date) => set({ selectedDate: date }),

    fetchDataStore: async () => {
        set({ isLoading: true });
        const state = get();
        const data = await fetchData(state.selectedDate, state.sellCurrency);
        if (data instanceof Error) return data;

        set((state) => {
            return { ...data, isLoading: false };
        });
        return data;
    },

    updateStore: (
        sellAmount: number,
        buyAmount: number,
        sellCurrency: string,
        buyCurrency: string,
        selectedDate: Date,
    ) => {
        const historyItem: HistoryItem = {
            date: selectedDate,
            sellAmount,
            sellCurrency,
            buyAmount,
            buyCurrency,
        };

        const conversionHistory = Object.assign([], get().conversionHistory);
        if (conversionHistory.length > 4) {
            conversionHistory.shift();
        }
        conversionHistory.push(historyItem);

        set(() => {
            return {
                sellAmount,
                sellCurrency,
                buyAmount,
                buyCurrency,
                selectedDate,
                conversionHistory,
            };
        });
    },
}));
