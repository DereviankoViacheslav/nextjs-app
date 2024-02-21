import Hero from '@/components/Hero/Hero';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
