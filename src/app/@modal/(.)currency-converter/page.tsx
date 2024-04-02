import { fetchData } from '@/api/actions';
import CurrencyConverter from '@/components/CurrencyConverter/CurrencyConverter';
import Modal from '@/components/Modal/Modal';

export default async function СurrencyСonverterPage() {
    const selectedDate = new Date();
    const data = await fetchData(selectedDate);

    if (data instanceof Error) {
        throw new Error(data.message);
    }

    return (
        <Modal>
            <CurrencyConverter data={data} date={selectedDate} />
        </Modal>
    );
}
