import { ChangeEvent, LegacyRef } from 'react';

type InputProps = {
  name: string;
  inputType?: 'number' | 'date';
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
};

export default function Input({
  name,
  value,
  inputType = 'number',
  onChange,
  min = undefined,
  max = undefined,
}: InputProps) {
  return (
    <input
      id={name}
      name={name}
      type={inputType}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      className="max-w-[220px] p-4 text-center border rounded border-[--input-border-color] placeholder:text-[--text-color-primary] appearance-none cursor-pointer [&::-webkit-calendar-picker-indicator]:bg-[url('/icon-date-picker.svg')]"
    />
  );
}
