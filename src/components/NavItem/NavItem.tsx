'use client';
import Link from 'next/link';

type Props = {
  label: string;
  href: string;
  activeClass: string;
  classes: string[];
};

export default function NavItem({ label, href, classes }: Props) {
  return (
    <Link
      href={href}
      // className={`${...classes}`}
    >
      {label}
    </Link>
  );
}
