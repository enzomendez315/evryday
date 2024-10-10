// the date that the user is currently viewing
// can be the current date or previous dates
let offsetDays = 0;
let activeDate = getLocalDate();

// gets the active date in the format 'YYYY-MM-DD'
export function getActiveDate() {
    return activeDate;
}

// gets the active date in the format 'MM'
export function getActiveDateMonth() {
    return activeDate.split('-')[1];
}

// gets the active year in the format 'YYYY'
export function getActiveDateYear() {
    return activeDate.split('-')[0];
}

// gets date in format 'YYYY-MM-DD'
// offset is the number of days to add/subtract to the current date
// used for backend purposes (i.e. the database uses the format 'YYYY-MM-DD')
export function setActiveDate(offset = 0) {
    offsetDays += offset;
    let tempDate = new Date();
    tempDate.setDate(tempDate.getDate() + offsetDays);
    const year = tempDate.getFullYear();
    const month = String(tempDate.getMonth() + 1).padStart(2, '0');
    const day = String(tempDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    activeDate = formattedDate;
}

// returns date in format 'Weekday, Month DD'
// takes in active date 'YYYY-MM-DD'
// just used for UI purposes
export function getFormattedDate(activeDate_) {
    let tempDate = convertStringToDate(activeDate_);
    const weekDay = tempDate.toLocaleString('default', { weekday: 'short' });
    const month = tempDate.toLocaleString('default', { month: 'long' });
    const day = tempDate.getDate();
    const formattedDate = `${weekDay}, ${month} ${day}`;
    return formattedDate;
}

// converts the formatted date string 'YYYY-MM-DD' to a normal date object
// used to convert the date string from getLocalDate to a date object
export function convertStringToDate(formattedDate) {
    const [year, month, day] = formattedDate.split('-');
    return new Date(year, month - 1, day);
}

// converts a date object to a date string in the form 'YYYY-MM-DD'
export function convertDatetoString(date) {
    // Create a new date object with the UTC time zone offset applied
    const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);

    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// gets the number of days between two dates in the format 'YYYY-MM-DD'
export function getDaysBetween(currentDate, newDate) {
    const currentDateObj = convertStringToDate(currentDate);
    const newDateObj = convertStringToDate(newDate);

    const diffInMilliseconds = newDateObj - currentDateObj;
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

    return Math.round(diffInMilliseconds / millisecondsPerDay);
}

// returns the current date in the format 'YYYY-MM-DD'
// just here to initialize the active date
function getLocalDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}