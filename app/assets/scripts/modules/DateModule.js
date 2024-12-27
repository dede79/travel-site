class DateModule {
    constructor() {
      // Select the parent element with the class "site-footer__text"
      this.parentElement = document.querySelector(".site-footer__text");
      this.initialize();
    }
  
    // Method to initialize and set the current date
    initialize() {
      if (this.parentElement) {
        const dateElement = this.parentElement.querySelector("#current-date");
        if (dateElement) {
          const currentDate = this.getCurrentDate();
          dateElement.innerText = currentDate;
          console.log("Date Set to:", currentDate);
        } else {
          console.warn("Child element with ID 'current-date' not found within '.site-footer__text'.");
        }
      } else {
        console.warn("Parent element with class 'site-footer__text' not found.");
      }
    }
  
    // Method to get the current year as a string
    getCurrentDate() {
      const now = new Date();
      return now.getFullYear().toString();
    }
  }
  
  export default DateModule;
  