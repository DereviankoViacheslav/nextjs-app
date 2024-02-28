import Image from 'next/image';
import Logo from '@/components/UI/Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';

export default function Footer() {
  return (
    <footer className="flex justify-between gap-x-32 py-16 px-[--padding-x] bg-[--bg-color-secondary] text-xs">
      <div>
        <Logo />
        <div className="flex flex-col mt-2">
          <span>04128, м.Київ, вул. Хрещатик, 19</span>
          <span>Ліцензія НБУ №156</span>
          <span>Ⓒ ПАТ ЧіпЧендж, 2019-2023</span>
        </div>
      </div>
      <Navigation isVertical />
      <div>
        <span className="flex">
          <Image
            src="/icon-mobile-phone.svg"
            alt="Icon phone"
            width={10}
            height={16}
          />
          <span className="ml-3 text-base font-bold text-[--text-color-secondary]">
            3773
          </span>
        </span>
        <div className="mt-1.5">Круглосуточная поддержка</div>
      </div>
      <div>
        <span className="flex">
          <Image
            src="/icon-phone.svg"
            alt="Icon phone"
            width={16}
            height={16}
          />
          <span className="ml-3 text-base font-bold text-[--text-color-secondary]">
            8 800 111 22 33
          </span>
        </span>
        <div className="mt-1.5">Бесплатно для звонков в пределах Украины</div>
      </div>
      <div className="flex items-start gap-x-4">
        <Image
          src="/icon-facebook.svg"
          alt="Icon facebook"
          width={9}
          height={16}
        />
        <Image
          src="/icon-instagram.svg"
          alt="Icon instagram"
          width={16}
          height={16}
        />
        <Image
          src="/icon-twitter.svg"
          alt="Icon twitter"
          width={16}
          height={13}
        />
        <Image
          src="/icon-youtube.svg"
          alt="Icon youtube"
          width={16}
          height={13}
        />
      </div>
    </footer>
  );
}
