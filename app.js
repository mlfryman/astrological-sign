// Astrological Sign App

var prompt = require('sync-prompt').prompt;

var today = new Date();

var dob = prompt('What is your birthday (mm/dd/yyyy)? \n\n ');
dob = new Date(dob);

var age = today.getFullYear() - dob.getFullYear();

if(today.getMonth() <= dob.getMonth()){
  if(today.getDate() < dob.getDate()){
    age = age - 1;
  }
}

var birthMonth = dob.getMonth();
var birthDate = dob.getDate();
var sign;

switch (birthMonth) {
  case 0:
    if(birthDate <= 19){
      sign = 'Capricorn';
    }else {
      sign = 'Aquarius';
    }
    break;
  case 1:
    if(birthDate <= 18){
      sign = 'Aquarius';
    }else {
      sign = 'Pices';
    }
    break;
  case 2:
    if(birthDate <= 20){
      sign = 'Pices';
    }else {
      sign = 'Aries';
    }
    break;
  case 3:
    if(birthDate <= 19){
      sign = 'Aries';
    }else {
      sign = 'Taurus';
    }
    break;
  case 4:
    if(birthDate <= 20){
      sign = 'Taurus';
    }else {
      sign = 'Gemini';
    }
    break;
  case 5:
    if(birthDate <= 20){
      sign = 'Gemini';
    }else {
      sign = 'Cancer';
    }
    break;
  case 6:
    if(birthDate <= 22){
      sign = 'Cancer';
    }else {
      sign = 'Leo';
    }
    break;
  case 7:
    if(birthDate <= 22){
      sign = 'Leo';
    }else {
      sign = 'Virgo';
    }
    break;
  case 8:
    if(birthDate <= 22){
      sign = 'Virgo';
    }else {
      sign = 'Libra';
    }
    break;
  case 9:
    if(birthDate <= 22){
      sign = 'Libra';
    }else {
      sign = 'Scorpio';
    }
    break;
  case 10:
    if(birthDate <= 21){
      sign = 'Scorpio';
    }else {
      sign = 'Sagittarius';
    }
    break;
  case 11:
    if(birthDate <= 21){
      sign = 'Sagittarius';
    }else {
      sign = 'Capricorn';
    }
    break;
}

console.log('You are ' + age + 'years old. I hope you already knew that!\n');
console.log('Since you asked, your zodiac sign is ' + sign +  '. However, zodiac signs are bollocks, and you should brush up on some science.');

// Chyld's Example

var dob = prompt('DOB (mm/dd/yyyy): ');

dob = new Date(dob);
var today = new Date ();

var birthMonth = dob.getMonth() + 1;
var birthDay = dob.getDate();
var birthYear = dob.getFullYear();

var bd = birthMonth + '/' + birthDay + '/' + today.getFullYear();
bd = new Date(bd);

var age = today.getFullYear() - dob.getFullYear();

if(today.getTime() < bd.getTime()){
  age--;
}

var sign;
