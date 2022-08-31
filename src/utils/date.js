export const formatDate = (date) => {
    const dateObj = new Date(date);

    const hour = formatNumber(dateObj.getHours())
    const min = formatNumber(dateObj.getMinutes())
    return `${hour}:${min}`
}

const formatNumber = (number) => {
    return (number < 10) ? "0" + number : number;
}