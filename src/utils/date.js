export const formatTime = (date) => {
    const dateObj = new Date(date);

    const hour = formatNumber(dateObj.getHours())
    const min = formatNumber(dateObj.getMinutes())
    return `${hour}:${min}`
}

const formatNumber = (number) => {
    return (number < 10) ? "0" + number : number;
}

export const formatDate = (date) => {
    const dateObj = new Date(date);

    return ("00" + dateObj.getDate()).slice(-2)
        + "/" + ("00" + (dateObj.getMonth() + 1)).slice(-2)
        + "/" + dateObj.getFullYear() + " "
        + ("00" + dateObj.getHours()).slice(-2) + ":"
        + ("00" + dateObj.getMinutes()).slice(-2)
        + ":" + ("00" + dateObj.getSeconds()).slice(-2);
}