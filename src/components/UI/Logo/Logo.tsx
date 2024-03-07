import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" className="flex">
            <Image
                src="/icon-logo.svg"
                alt="Logo icon"
                width={23}
                height={23}
            />
            <span className="font-bold text-[--text-color-secondary] ml-3 text-xl">
                Chip Change
            </span>
        </Link>
    );
}
