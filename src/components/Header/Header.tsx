import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/UI/Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';

export default function Header() {
  return (
    <header className="flex gap-x-32 items-center py-10 px-[--padding-x] first-letter:uppercase bg-[--bg-color]">
      <Logo />
      <Navigation />
      <Link href="/personal-account" className="flex ml-auto">
        <Image
          src="/icon-personal-account.svg"
          alt="Personal account icon"
          width={22}
          height={22}
        />
        <span className="ml-4 text-[--text-color-secondary]">
          Личный кабинет
        </span>
      </Link>
    </header>
  );
}
