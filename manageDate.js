var TIMEZONE = "America/Los_Angeles";
var DATE_LANGUAGE_FORMAT = "en-US";

function setTimezone(timezone) {
    TIMEZONE = timezone;
}

function setDateLanguageFormat(languageFormat) {
    DATE_LANGUAGE_FORMAT = languageFormat
}

function getCurrentDate() {
    let date = new Date();
    let newData = date.toLocaleString(DATE_LANGUAGE_FORMAT, {timeZone: TIMEZONE});
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
    setDateLanguageFormat: setDateLanguageFormat,
    getCurrentDate: getCurrentDate,
    getFullYear: getFullYear,
    getMonth: getMonth,
    getDate: getDate,
    getTime: getTime
}