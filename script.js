"use strict";

// Current Day
const myTime = new Date();

const day = myTime.getDate();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = daysOfWeek[day];

const currentDay = document.getElementById("currentDay");

currentDay.innerHTML = today;



// CurrentTimeUTC

const utcHours = myTime.getUTCHours();
const utcMinutes = myTime.getUTCMinutes();
const utcSeconds = myTime.getUTCSeconds();

const utcCurrentTime = `${utcHours} : ${utcMinutes} : ${utcSeconds} `

const currentTime = document.getElementById("currentTimeUTC");
currentTime.innerHTML = utcCurrentTime;
