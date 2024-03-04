// 'https://v6.exchangerate-api.com/v6/7046aab1270f32e40bd5dbe7/latest/USD';
// 'https://v6.exchangerate-api.com/v6/7046aab1270f32e40bd5dbe7/history/USD/YEAR/MONTH/DAY';

export async function fetchData(date: Date, currency: string) {
  'use server';
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/7046aab1270f32e40bd5dbe7/history/${currency}/${year}/${month}/${day}`,
    {
      cache: 'no-cache',
    },
  );
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();

  return data;
}
