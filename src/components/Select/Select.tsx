import { ChangeEventHandler } from 'react';
import Image from 'next/image';

type SelectProps = {
  name: string;
  value: string;
  options: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export default function Select({
  name,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <label className="relative">
      <Image
        src="/icon-select-arrow.svg"
        alt=""
        width={16}
        height={8}
        className="absolute w-4 h-2 top-1/2 right-4 translate-y-[-50%]"
      />
      <select
        value={value}
        name={name}
        onChange={onChange}
        className="max-w-[220px] ml-[15px] p-4 pr-[50px] text-center border rounded border-[--input-border-color] placeholder:text-[--text-color-primary] appearance-none uppercase bg-inherit outline-none cursor-pointer"
      >
        {options.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}
