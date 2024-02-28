import CurrencyConverter from '@/components/CurrencyConverter/CurrencyConverter';
import ConversionHistory from '@/components/ConversionHistory/ConversionHistory';

export default function СurrencyСonverterPage() {
  return (
    <>
      <section className="bg-[--bg-color-secondary]">
        <div className="w-[960px] mx-auto py-[80px]">
          <CurrencyConverter />
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
