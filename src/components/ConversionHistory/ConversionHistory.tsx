'use client';
import Button from '@/components/UI/Button/Button';
import { State, useAppStore } from '@/stores/app.store';

export default function ConversionHistory() {
  const {
    sellAmount,
    sellCurrency,
    buyAmount,
    buyCurrency,
    selectedDate,
    currenciesRate,
  }: State = useAppStore((state) => state);

  return (
    <div className="bg-[--bg-color-secondary]">
      <div>
        <p>sellAmount: {sellAmount}</p>
        <p>sellCurrency: {sellCurrency}</p>
        <p>buyAmount: {buyAmount}</p>
        <p>buyCurrency: {buyCurrency}</p>
        {/* <p>currenciesRate: {currenciesRate[buyCurrency].rate}</p>
        <p>currenciesRateName: {currenciesRate[buyCurrency].name}</p> */}
        {/* <p>selectedDate: {selectedDate.toISOString()}</p> */}
        <Button>Очистить историю</Button>
      </div>
    </div>
  );
}
