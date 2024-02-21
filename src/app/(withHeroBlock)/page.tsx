import Image from 'next/image';
import Button from '@/components/UI/Button/Button';

export default function Home() {
  return (
    <section>
      <div className="flex justify-between max-w-[866px] mx-auto py-[85px]">
        <div>
          <h2 className="mb-[25px] font-bold text-[40px] text-[--text-color-secondary]">
            Конвертер валют
          </h2>
          <p className="max-w-[380px] mb-[25px] text-[20px]">
            Преобладающая деятельность банковской группы за последние четыре
            отчетных квартала составляет 50 и более процентов.
          </p>
          <Button href="/currency-converter">Конвертировать валюту</Button>
        </div>
        <Image
          src="/picture.jpg"
          alt="picture"
          width={436}
          height={314}
          className="rounded-s"
        />
      </div>
    </section>
  );
}
