'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import { useAppStore } from '@/stores/app.store';
import { fetchData } from '@/api/actions';
import Button from '@/components/UI/Button/Button';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';

export default function СurrencyСonverter() {
    const {
        currencyNames,
        selectedDate,
        fetchDataStore,
        isLoading,
        currencyRates,
        updateStore,
    } = useAppStore((state) => state);
    const [formValues, setFormValues] = useState({
        sellAmount: 0,
        buyAmount: 0,
        sellCurrency: '',
        buyCurrency: '',
        selectedDate: new Date(),
        currencyRate: 1.5,
    });

    useEffect(() => {
        (async () => {
            const data = await fetchDataStore();
            if (data instanceof Error) {
                throw new Error(data.message);
            }
            setFormValues({
                ...formValues,
                sellCurrency: data.sellCurrency,
                buyCurrency: data.buyCurrency,
                currencyRate: data.currencyRates[data.buyCurrency].rate,
            });
        })();
    }, []);

    if (isLoading)
        return (
            <div className="flex justify-center items-center min-h-[318px] bg-[--bg-color-primary] text-3xl">
                Data is loading...
            </div>
        );

    const minDate = new Date(selectedDate.getTime() - 60 * 60 * 24 * 6 * 1000);

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

    const onChangeDateInput = (e: ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setFormValues({
            ...formValues,
            selectedDate: new Date(date),
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {
            sellAmount,
            buyAmount,
            sellCurrency,
            buyCurrency,
            selectedDate,
        } = formValues;
        updateStore(
            sellAmount,
            buyAmount,
            sellCurrency,
            buyCurrency,
            selectedDate,
        );
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
                        value={formatDate(formValues.selectedDate)}
                        min={formatDate(minDate)}
                        max={formatDate(formValues.selectedDate)}
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
