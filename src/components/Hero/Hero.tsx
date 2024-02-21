import Image from 'next/image';
import Button from '@/components/UI/Button/Button';

export default function Hero() {
  return (
    <section className="bg-[url('/bg-hero.jpg')] bg-auto bg-center">
      <div className="flex justify-between max-w-[866px] mx-auto py-[85px]">
        <div>
          <h1 className="mb-[25px] font-bold text-[54px] text-[--text-color-light]">
            Chip Change
          </h1>
          <p className="mb-[25px] text-[20px] text-[--text-color-light]">
            Обменник валют - учебный
          </p>
          <Button theme="secondary" href="/currency-converter">
            Конвертер валют
          </Button>
        </div>
        <Image src="/card-debit.png" alt="Logo icon" width={341} height={216} />
      </div>
    </section>
  );
}
