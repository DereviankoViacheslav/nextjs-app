'use client';
import Link from 'next/link';
import { SyntheticEvent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: (e: SyntheticEvent) => void;
  disabled?: boolean;
  href?: string;
  theme?: 'primary' | 'secondary';
};

export default function Button({
  children,
  disabled,
  onClick,
  href,
  theme = 'primary',
}: Props) {
  const classes = `inline-block p-[20px] rounded text-[--button-text-color-${theme}] bg-[--button-color-${theme}]`;

  if (href) {
    return (
      <Link className={`${classes}`} href={href}>
        {children}
      </Link>
    );
  }

  const onClickAction = (e: SyntheticEvent) => {
    if (onClick && !disabled) {
      return onClick(e);
    }
  };

  return (
    <button className={`${classes}`} onClick={onClickAction}>
      {children}
    </button>
  );
}
