import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const font = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['cyrillic'],
});

export const metadata: Metadata = {
    title: 'Chip Change',
    description: 'Chip Change - Home Page',
};

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className='h-full'>
            <body className={`flex flex-col min-h-full ${font.className}`}>
                <Header />
                <main className="grow">{children}</main>
                <Footer />
            </body>
            {modal}
        </html>
    );
}
