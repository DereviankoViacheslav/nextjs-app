'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import { useAppStore } from '@/stores/app.store';
import Button from '@/components/UI/Button/Button';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';
import { Data, fetchData } from '@/api/actions';

export default function СurrencyСonverter({
    data,
    date,
}: {
    data: Data;
    date: Date;
}) {
    const { updateStore } = useAppStore((state) => state);

    const { currencyNames, currencyRates, sellCurrency, buyCurrency } = data;

    const [formValues, setFormValues] = useState({
        sellAmount: 0,
        buyAmount: 0,
        sellCurrency,
        buyCurrency,
        date,
        currencyRate: currencyRates[buyCurrency].rate,
    });

    const minDate = new Date(date.getTime() - 60 * 60 * 24 * 6 * 1000);

    const onChangeAmountInput = (e: ChangeEvent<HTMLInputElement>) => {
        let sellAmount = 0;
        let buyAmount = 0;
        if (e.target.name === 'sellAmount') {
            sellAmount = +e.target.value;
            buyAmount = +(sellAmount * formValues.currencyRate).toFixed(2);
        }
        if (e.target.name === 'buyAmount') {
            buyAmount = +e.target.value;
            sellAmount = +(buyAmount / formValues.currencyRate).toFixed(2);
        }
        setFormValues({ ...formValues, sellAmount, buyAmount });
    };

    const onChangeCurrencySelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const currencyCode = e.target.value;
        const name = e.target.name;
        let { sellCurrency, buyCurrency, sellAmount } = formValues;
        if (name === 'sellCurrency') sellCurrency = currencyCode;
        if (name === 'buyCurrency') buyCurrency = currencyCode;
        const rate = currencyRates[currencyCode].rate;
        setFormValues({
            ...formValues,
            sellCurrency,
            buyCurrency,
            buyAmount: +(sellAmount * rate).toFixed(2),
            currencyRate: rate,
        });
    };

    const onChangeDateInput = async (e: ChangeEvent<HTMLInputElement>) => {
        const date = new Date(e.target.value);
        const data = await fetchData(date);

        if (data instanceof Error) {
            throw new Error(data.message);
        }
        const { currencyRates, buyCurrency } = data;

        setFormValues({
            ...formValues,
            currencyRate: currencyRates[buyCurrency].rate,
            date,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateStore(formValues);
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
                            value={`${formValues.sellAmount}`}
                            onChange={onChangeAmountInput}
                        />
                        <Select
                            value={formValues.sellCurrency}
                            name="sellCurrency"
                            options={currencyNames}
                            onChange={onChangeCurrencySelect}
                        />
                    </div>
                    <Input
                        name="date"
                        inputType="date"
                        value={formatDate(formValues.date)}
                        min={formatDate(minDate)}
                        max={formatDate(formValues.date)}
                        onChange={onChangeDateInput}
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
                            value={`${formValues.buyAmount}`}
                            name="buyAmount"
                            onChange={onChangeAmountInput}
                        />
                        <Select
                            value={formValues.buyCurrency}
                            name="buyCurrency"
                            options={currencyNames}
                            onChange={onChangeCurrencySelect}
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
