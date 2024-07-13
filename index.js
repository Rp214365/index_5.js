// Dates

let myDetes = new Date()
// console.log(typeof myDetes.toDateString());
// console.log(myDetes.toTimeString());
// console.log(myDetes.toUTCString());
// console.log(myDetes.toISOString());
// console.log(typeof myDetes);

// let mycreatedDates = new  Date(2024,0,24);
// let mycreatedDates = new  Date(2024,5,25,5,3);
// let mycreatedDates = new  Date("2023-01-14");
// let mycreatedDates = new  Date("01-14-2023");
// console.log(mycreatedDates.toLocaleString());

let mytimestamp = new Date();
// console.log(mytimestamp);
// console.log(mytimestamp.getTime());
// console.log(mytimestamp.Math.floor(Date.now()/1000));


let NewDate  = new Date()
// console.log(NewDate.getHours());
// console.log(NewDate.getTime());
// console.log(NewDate.getDay());
// console.log(NewDate.getSeconds());

NewDate.toLocaleString('default',{
    weekday:"long",
})

console.log(NewDate);
