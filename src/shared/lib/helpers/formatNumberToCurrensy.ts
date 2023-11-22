export function formatNumberToCurrensy(number: number) {
    const formatter = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });

    return formatter.format(number);
}
