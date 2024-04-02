'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="fixed left-0 right-0 top-0 bottom-0 flex flex-col gap-2 justify-center items-center bg-black/60 text-6xl text-sky-300">
            <h2>Something went wrong!</h2>
            <button
                onClick={() => reset()}
                className="rounded-2xl p-4 bg-slate-500"
            >
                Try again
            </button>
        </div>
    );
}
