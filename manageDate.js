var TIMEZONE = "America/Los_Angeles";

function setTimezone(timezone) {
    TIMEZONE = timezone;
}

function getCurrentDate() {
    let date = new Date();
    let newData = date.toLocaleString('en-US', {timeZone: TIMEZONE});
    return newData;
}

function getFullYear(Date) {
    return Date.substring(6,10);
}

function getMonth(Date) {
    return Date.substring(0,2);
}

function getDate(Date) {
    return Date.substring(3,5);
}

function getTime(Date) {
    return Date.substring(12);
}

module.exports = {
    setTimezone: setTimezone,
    getCurrentDate: getCurrentDate,
    getFullYear: getFullYear,
    getMonth: getMonth,
    getDate: getDate,
    getTime: getTime
}