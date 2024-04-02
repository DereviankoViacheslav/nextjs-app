import { create } from 'zustand';

type HistoryItem = {
    date: Date;
    sellAmount: number;
    sellCurrency: string;
    buyAmount: number;
    buyCurrency: string;
};

type State = {
    conversionHistory: HistoryItem[];
    deleteConversionHistory: () => void;

    updateStore: (data: HistoryItem) => void;
};

export const useAppStore = create<State>((set, get) => ({
    conversionHistory: [],
    deleteConversionHistory: () => set({ conversionHistory: [] }),

    updateStore: (data) => {
        const conversionHistory = Object.assign([], get().conversionHistory);
        if (conversionHistory.length > 4) {
            conversionHistory.shift();
        }
        conversionHistory.push(data);

        set({ conversionHistory });
    },
}));
