import CurrencyConverter from '@/components/CurrencyConverter/CurrencyConverter';
import ConversionHistory from '@/components/ConversionHistory/ConversionHistory';
import { fetchData } from '@/api/actions';

export default async function СurrencyСonverterPage() {
    const selectedDate = new Date();
    const data = await fetchData(selectedDate);

    if (data instanceof Error) {
        throw new Error(data.message);
    }

    return (
        <>
            <section className="bg-[--bg-color-secondary]">
                <div className="w-[960px] mx-auto py-[80px]">
                    <CurrencyConverter
                        data={data}
                        date={selectedDate}
                    />
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
