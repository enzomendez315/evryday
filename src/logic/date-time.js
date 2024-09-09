// gets date in format 'Weekday, Month DD'
// takes input from getLocalDate
export function getFormattedDate() {
    let tempDate = new Date();
    const weekDay = tempDate.toLocaleString('default', { weekday: 'long' });
    const month = tempDate.toLocaleString('default', { month: 'long' });
    const day = tempDate.getDate();
    const formattedDate = `${weekDay}, ${month} ${day}`;
    return formattedDate;
}