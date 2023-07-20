

let showtime = () =>{
    let time = new Date();
    let h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds(),
        session = "AM";
    if(h == 0){
        h=12; // 12 hour format
    };
    if(h>12){
        h = h-12; // 12 hour format
        session = "PM"
    }

    // if(h<10){
    //     h = "0" + h;
    // }

    // if(m<10){
    //     m = "0" + m;
    // }
    // if(s<10){
    //     s = "0" + s;
    // }
// Alternative way:
    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;
    let updateTime = document.getElementById("DigitalClock");
    updateTime.innerHTML = h + ":" + m + ":" + s +" " + "<br>" +  session ; 
     
    setTimeout(showtime, 1000);
}

showtime();
// setInterval(showtime, 1000);


// // Function to get the current date in the required format
// function getCurrentDate() {
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     const currentDate = new Date();
//     const day = daysOfWeek[currentDate.getDay()];
//     const month = monthsOfYear[currentDate.getMonth()];
//     const date = currentDate.getDate();
//     const year = currentDate.getFullYear();

//     return `${day}, ${month} ${date}, ${year}`;
// }

// // Update the HTML element with the current date
// document.addEventListener("DOMContentLoaded", function() {
//     const dateElement = document.getElementById("day");
//     dateElement.textContent = getCurrentDate();
// });

 