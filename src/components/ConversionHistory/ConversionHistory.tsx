'use client';
import formatDate from '@/utils/formatDate';
import { useAppStore } from '@/stores/app.store';
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';

export default function ConversionHistory() {
    const { conversionHistory, deleteConversionHistory } = useAppStore(
        (state) => state,
    );

    return (
        <div className="p-14 bg-[--bg-color-secondary]">
            <div className="flex justify-between mb-8 text-2xl font-bold">
                <h2 className="text-[--text-color-secondary]">
                    История конвертаций
                </h2>
                <Button onClick={deleteConversionHistory}>
                    Очистить историю
                </Button>
            </div>
            <ul>
                {conversionHistory.map(
                    (
                        {
                            date,
                            sellAmount,
                            sellCurrency,
                            buyAmount,
                            buyCurrency,
                        },
                        index,
                    ) => (
                        <li
                            key={index}
                            className="flex justify-evenly mb-4 p-4 rounded last:mb-0 bg-[--bg-color-primary]"
                        >
                            <span>{formatDate(date)}</span>
                            <span>{sellAmount}</span>
                            <span>{sellCurrency}</span>
                            <Image
                                src="/icon-arrow.svg"
                                alt=""
                                width={14}
                                height={10}
                            />
                            <span>{buyAmount}</span>
                            <span>{buyCurrency}</span>
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
}
