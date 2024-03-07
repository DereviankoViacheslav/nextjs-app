'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
    label: string;
    href: string;
};

type Props = {
    navLinks: NavLink[];
};

export default function NavItemList({ navLinks }: Props) {
    const pathName = usePathname();

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathName === link.href;

                return (
                    <Link
                        key={link.href}
                        className={`hover:[color:--link-hover-color] ${isActive ? 'text-[--link-hover-color]' : ''}`}
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </>
    );
}
