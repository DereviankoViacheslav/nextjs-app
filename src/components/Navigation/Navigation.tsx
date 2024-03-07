import NavItemList from '../NavItemList/NavItemList';

const navItems = [
    { label: 'Услуги', href: '/services' },
    { label: 'Конвертор валют', href: '/currency-converter' },
    { label: 'Контакты', href: '/contacts' },
    { label: 'Задать вопрос', href: '/feedback' },
];

type Props = {
    isVertical?: boolean;
};

export default function Navigation({ isVertical }: Props) {
    return (
        <nav
            className={`flex gap-x-9 text-base ${isVertical ? 'flex-col' : ''}`}
        >
            <NavItemList navLinks={navItems} />
        </nav>
    );
}
