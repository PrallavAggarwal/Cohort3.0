// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
//
// Can you make it so that it updates every second, and shows time in the following formats - 
//
//  - HH:MM::SS (Eg. 13:45:23)
//
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

//DAte methods
//

const date = new Date();

console.log('date.now() : ', Date.now());
console.log('date.getTime() : ', date.getTime());
console.log('date.getHours() : ', typeof date.getHours());
console.log('date.getMinute() : ', date.getMinutes());
console.log('date.getSeconds() : ', date.getSeconds());
console.log('date.getMonth() : ', date.getMonth())
console.log('date.getFullyear() : ', date.getFullYear());
console.log('date.getDay() : ', date.getDay());
console.log('date.getDate() : ', date.getDate());



function formatDate(now, use24 = false) {
  let Hours = use24 ? now.getHours() : (now.getHours() % 12 || 12);
  hour.innerText = Hours;
  let Minute = now.getMinutes();
  minute.innerText = Minute;
  let Second = now.getSeconds();
  second.innerText = Second;
  let AM_PM = use24 ? '' : (now.getHours() >= 12 ? 'PM' : 'AM');
  return `${Hours}:${Minute}:${Second} ${AM_PM}`;
}

let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second')

function CreateDate() {
  let now = new Date();
  let time12 = formatDate(now);
  let time24 = formatDate(now, true);
  console.clear();
  // box.data
  console.log(time12);
  console.log(time24);
}

setInterval(CreateDate, 1000)



