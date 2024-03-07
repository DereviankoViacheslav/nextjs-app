export default function formatDate(date: Date) {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    const day = d < 10 ? '0' + d : d;
    const month = m < 10 ? '0' + m : m;

    return `${y}-${month}-${day}`;
}
