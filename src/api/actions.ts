'use server';
import { CurrencyRates } from '@/stores/app.store';

interface RequestData {
    result: string;
    documentation: string;
    terms_of_use: string;
    time_last_update_unix: number;
    time_last_update_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
    base_code: string;
    conversion_rates: { [currency: string]: number };
}

const currencyAvailableNames = [
    'UAH',
    'EUR',
    'USD',
    'BGN',
    'CZK',
    'GBP',
    'JEP',
    'JPY',
];

const defaultCurrencyName = 'USD';

export type Data = {
    currencyRates: CurrencyRates;
    currencyNames: string[];
    sellCurrency: string;
    buyCurrency: string;
};

export const fetchData = async (
    date: Date,
    currency: string = defaultCurrencyName,
): Promise<Data | Error> => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // const url = `https://v6.exchangerate-api.com/v6/6028cce062c80d51f6e6f10c/history/${currency}/${year}/${month}/${day}`;

    const url = `https://v6.exchangerate-api.com/v6/6028cce062c80d51f6e6f10c/latest/UAH`;

    const res = await fetch(url, {
        cache: 'no-cache',
    });

    if (!res.ok) return new Error('Failed to fetch data');

    const data: RequestData = await res.json();

    const currencies: [string, number][] = Object.entries(
        data.conversion_rates,
    ).filter(([key]) => currencyAvailableNames.includes(key));

    const currencyRates: CurrencyRates = {};
    currencies.forEach(([key, value]) => {
        currencyRates[key] = { name: key, rate: value };
    });

    const sellCurrency = data.base_code;
    const buyCurrency = defaultCurrencyName;
    const currencyNames = currencies.map(([key]) => key);

    return {
        currencyRates,
        currencyNames,
        sellCurrency,
        buyCurrency,
    };
};
