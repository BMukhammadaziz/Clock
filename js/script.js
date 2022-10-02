let elDate = document.querySelector(".date")
let elMonth = document.querySelector(".month")
let elYear = document.querySelector(".year")
let elHour = document.querySelector(".hour");
let elMinute = document.querySelector(".minute");
let elSecond = document.querySelector(".second");

function timer() {
    let dateNew = new Date();
    let date = dateNew.getDate();
    let month = dateNew.getMonth();
    let year = dateNew.getFullYear();
    let hour = dateNew.getHours();
    let minute = dateNew.getMinutes();
    let second = dateNew.getSeconds();

    elDate.textContent = (date < 10) ? '0' + date : date;
    elMonth.textContent = (month < 10) ? (month + 1) : (month + 1);
    elYear.textContent = (year < 10) ? '0' + year : year;
    elHour.textContent = (hour < 10) ? '0' + hour : hour;
    elMinute.textContent = (minute < 10) ? '0' + minute : minute;
    elSecond.textContent = (second < 10) ? '0' + second : second;
}


setInterval(() => {
    timer()
}, 1000);