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
    disabled = false,
    onClick,
    href,
    theme = 'primary',
}: Props) {
    // const classes = `inline-block py-[20px] px-[30px] rounded text-[--button-text-color-${theme}] bg-[--button-color-${theme}]`;
    // const classes = `inline-block p-[20px] rounded text-[--button-text-color-secondary] bg-[--button-color-secondary]`;
    const classes = `inline-block p-[20px] rounded text-[--button-text-color-primary] bg-[--button-color-primary]`;

    if (href) {
        return (
            <Link className={classes} href={href}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`${classes}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
