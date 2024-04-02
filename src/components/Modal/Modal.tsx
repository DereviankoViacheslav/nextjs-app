export default function Modal({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black/60">
            {children}
        </div>
    );
}
