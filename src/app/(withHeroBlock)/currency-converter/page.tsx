import CurrencyConverter from '@/components/CurrencyConverter/CurrencyConverter';
import ConversionHistory from '@/components/ConversionHistory/ConversionHistory';
import { fetchData as fd } from '@/api/fetchData';

interface RequestData {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: ConversionRates;
}

interface ConversionRates {
  UAH: number;
  EUR: number;
  USD: number;
  BGN: number;
  CZK: number;
  GBP: number;
  JEP: number;
  JPY: number;
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

export type currenciesRate = {
  [currency: string]: { name: string; rate: number };
};

export type Data = {
  currenciesRate: currenciesRate;
  currencyNames: string[];
  sellCurrency: string;
  buyCurrency: string;
  buyAmount: number;
  fetchData: (date: Date, currency: string) => {};
};

const countAmount = (sellAmount: number, buyAmount: number) => {
  return +(sellAmount * buyAmount).toFixed(2);
};

const getData = async (): Promise<Data> => {
  // const res = await fetch(
  //   `https://v6.exchangerate-api.com/v6/211274c39d35699b2bc86458/history/${currentCurrency}/${year}/${month}/${day}`,
  // );

  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/211274c39d35699b2bc86458/latest/UAH`,
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const data: RequestData = await res.json();

  const currencies: [string, number][] = Object.entries(
    data.conversion_rates,
  ).filter(([key]) => currencyAvailableNames.includes(key));

  const currencyNames = currencies.map(([key]) => key);

  const currenciesRate: currenciesRate = {};

  currencies.forEach(([key, value]) => {
    currenciesRate[key] = { name: key, rate: value };
  });

  const sellCurrency = data.base_code;
  const buyCurrency = sellCurrency === 'UAH' ? 'USD' : 'UAH';
  const buyAmount = countAmount(
    currenciesRate[sellCurrency].rate,
    currenciesRate[buyCurrency].rate,
  );

  return {
    fetchData: fd,
    currenciesRate,
    currencyNames,
    sellCurrency,
    buyCurrency,
    buyAmount,
  };
};

export default async function СurrencyСonverterPage() {
  const {
    currenciesRate,
    currencyNames,
    sellCurrency,
    buyCurrency,
    buyAmount,
    fetchData,
  } = await getData();

  return (
    <>
      <section className="bg-[--bg-color-secondary]">
        <div className="w-[960px] mx-auto py-[80px]">
          <CurrencyConverter
            currenciesRate={currenciesRate}
            currencyNames={currencyNames}
            sellCurrency={sellCurrency}
            buyCurrency={buyCurrency}
            buyAmount={buyAmount}
            fetchData={fetchData}
          />
          {/* <CurrencyConverter data={data} /> */}
        </div>
      </section>
      <section className="bg-[--bg-color-primary]">
        <div className="w-[960px] mx-auto py-[80px]">
          <ConversionHistory />
        </div>
      </section>
    </>
  );
}
