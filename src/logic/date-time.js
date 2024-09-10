// the date that the user is currently viewing
// can be the current date or previous dates
let activeDate;
let offsetDays = 0;
// gets date in format 'Weekday, Month DD'
export function getFormattedDate() {
    let tempDate = new Date();
    const weekDay = tempDate.toLocaleString('default', { weekday: 'long' });
    const month = tempDate.toLocaleString('default', { month: 'long' });
    const day = tempDate.getDate();
    const formattedDate = `${weekDay}, ${month} ${day}`;
    return formattedDate;
}

// gets date in format 'YYYY-MM-DD', just new Date() is UTC not local time
export function getLocalDate(offset = 0) {
    offsetDays += offset;
    let tempDate = new Date();
    tempDate.setDate(tempDate.getDate() + offsetDays);
    const year = tempDate.getFullYear();
    const month = String(tempDate.getMonth() + 1).padStart(2, '0');
    const day = String(tempDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}