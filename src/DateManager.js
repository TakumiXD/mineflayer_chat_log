class DateManager {
    constructor(timezone, languageFormat) {
        this.timezone = timezone;
        this.languageFormat = languageFormat;
    }

    setTimezone (timezone) {
        this.timezone = timezone;
    }
    
    setDateLanguageFormat (languageFormat) {
        this.languageFormat = languageFormat
    }

    getCurrentDate() {
        let date = new Date();
        let newData = date.toLocaleString(DATE_LANGUAGE_FORMAT, {timeZone: TIMEZONE});
        return newData;
    }
    
    getFullYear(Date) {
        return Date.substring(6,10);
    }
    
    getMonth(Date) {
        return Date.substring(0,2);
    }
    
    getDate (Date) {
        return Date.substring(3,5);
    }
    
    getTime (Date) {
        return Date.substring(12);
    }
}

module.exports = DateManager;