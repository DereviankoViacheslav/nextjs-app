import Image from 'next/image';
import Button from '@/components/UI/Button/Button';

export default function СurrencyСonverter() {
  return (
    <div className="p-[50px] text-[20px] bg-[--bg-color-primary]">
      <h2 className="mb-[70px] text-[40px] font-bold text-[--text-color-secondary]">
        Конвертер валют
      </h2>
      <div className="flex justify-between">
        <div className="flex flex-col w-[355px] pl-[10px]">
          <label htmlFor="sell" className="block mb-[30px]">
            Есть в наличии:
          </label>
          <div className="mb-6">
            <input
              id="sell"
              type="number"
              placeholder="1000"
              className="max-w-[220px] mr-[15px] p-4 text-center border rounded border-[--input-border-color] placeholder:text-[--text-color-primary]"
            />
            <label className="relative">
              <Image
                src="/icon-select-arrow.svg"
                alt=""
                width={16}
                height={8}
                className="absolute w-4 h-2 top-1/2 right-4 translate-y-[-50%]"
              />
              <select
                name="currencySell"
                id="currencySell"
                className="max-w-[220px] p-4 pr-[50px] text-center border rounded border-[--input-border-color] placeholder:text-[--text-color-primary] appearance-none uppercase bg-inherit outline-none cursor-pointer"
              >
                <option value="uah">uah</option>
                <option value="usd">usd</option>
                <option value="eur">eur</option>
              </select>
            </label>
          </div>
          <input
            type="date"
            value="2024-02-28"
            min="2024-02-22"
            max="2024-02-28"
            className="max-w-[220px] mr-[15px] p-4 text-center border rounded border-[--input-border-color] placeholder:text-[--text-color-primary] appearance-none cursor-pointer
            [&::-webkit-calendar-picker-indicator]:bg-[url('/icon-date-picker.svg')]
            "
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
          <label htmlFor="sell" className="block mb-[30px]">
            Хочу купить:
          </label>
          <div className="mb-6">
            <input
              id="buy"
              type="number"
              placeholder="1000"
              className="max-w-[220px] mr-[15px] p-4 text-center border rounded border-[--input-border-color] placeholder:text-[--text-color-primary]"
            />
            <label className="relative">
              <Image
                src="/icon-select-arrow.svg"
                alt=""
                width={16}
                height={8}
                className="absolute w-4 h-2 top-1/2 right-4 translate-y-[-50%]"
              />
              <select
                name="currencySell"
                id="currencySell"
                className="mw-[220px] p-4 pr-[50px] text-center border rounded border-[--input-border-color] placeholder:text-[--text-color-primary] appearance-none uppercase bg-inherit outline-none cursor-pointer"
              >
                <option value="uah">uah</option>
                <option value="usd">usd</option>
                <option value="eur">eur</option>
              </select>
            </label>
          </div>
          <span className="self-end">
            <Button>Сохранить результат</Button>
          </span>
        </div>
      </div>
    </div>
  );
}
