'use client';
import { ChangeEvent, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import Button from '@/components/UI/Button/Button';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';
import { State, useAppStore } from '@/stores/app.store';
import { Data } from '@/app/(withHeroBlock)/currency-converter/page';

export default function СurrencyСonverter(data: Data) {
  const {
    sellAmount,
    sellCurrency,
    buyAmount,
    buyCurrency,
    setSellAmount,
    setSellCurrency,
    setBuyAmount,
    setBuyCurrency,
    currencyNames,
    selectedDate,
    setSelectedDate,
    currenciesRate,
    setCurrenciesRate,
    setCurrencyNames,
  }: State = useAppStore((state) => state);
  /**
 * currenciesRate,
    currencyNames,
    sellCurrency,
    buyCurrency,
    buyAmount,
 */
  useEffect(() => {
    setCurrenciesRate(data.currenciesRate);
    setSellCurrency(data.sellCurrency);
    setBuyCurrency(data.buyCurrency);
    setBuyAmount(data.buyAmount);
    setCurrencyNames(data.currencyNames);
  }, [
    data.buyAmount,
    data.buyCurrency,
    data.currenciesRate,
    data.sellCurrency,
    data.currencyNames,
    setBuyAmount,
    setBuyCurrency,
    setCurrenciesRate,
    setSellCurrency,
    setCurrencyNames,
  ]);

  const minDate = new Date(selectedDate.getTime() - 60 * 60 * 24 * 6 * 1000);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeSellAmountInput = (e: ChangeEvent<HTMLInputElement>) => {
    const sellValue = +e.target.value;
    setSellAmount(sellValue);

    const buyValue = +(sellAmount * currenciesRate[buyCurrency].rate).toFixed(
      2,
    );
    setBuyAmount(buyValue);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBuyAmount(+e.target.value);
  };

  return (
    <div className="p-[50px] text-[20px] bg-[--bg-color-primary]">
      <form onSubmit={handleSubmit} className="flex justify-between">
        <div className="flex flex-col w-[355px] pl-[10px]">
          <label htmlFor="sellAmount" className="block mb-[30px]">
            Есть в наличии:
          </label>
          <div className="mb-6">
            <Input
              name="sellAmount"
              value={`${sellAmount}`}
              onChange={onChangeSellAmountInput}
            />
            <Select
              value={sellCurrency}
              name="sellCurrency"
              options={currencyNames}
              onChange={(e) => setSellCurrency(e.target.value)}
            />
          </div>
          <Input
            name="date"
            inputType="date"
            value={formatDate(selectedDate)}
            min={formatDate(minDate)}
            max={formatDate(selectedDate)}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
          />
        </div>
        <Image
          src="/icon-arrows.svg"
          alt=""
          width={22}
          height={22}
          className="w-[22px] h-[22] my-auto top-1/2 right-4 translate-y-[-50%]"
        />
        <div className="flex flex-col w-[355px] pr-[10px]">
          <label htmlFor="buyAmount" className="block mb-[30px]">
            Хочу купить:
          </label>
          <div className="mb-6">
            <Input
              value={`${buyAmount}`}
              name="buyAmount"
              onChange={onChange}
            />
            <Select
              value={buyCurrency}
              name="buyCurrency"
              options={currencyNames}
              onChange={(e) => setBuyCurrency(e.target.value)}
            />
          </div>
          <span className="self-end">
            <Button>Сохранить результат</Button>
          </span>
        </div>
      </form>
    </div>
  );
}
