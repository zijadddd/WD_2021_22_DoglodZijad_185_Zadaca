/*
***********************************************
         ZADACI ZA SAMOSTALNI RAD
***********************************************

1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38

2. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

4. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

5. Write a JavaScript program to calculate days left until next Christmas

6. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

7. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C

8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

9. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

10. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

*/

console.log("Zadaci za samostalan rad\n---------------------------------------")
// Zadatak 1 
console.log("Zadatak 1")

let day = new Date();

switch(day.getDay()) {
    case 0:
        console.log("Today is: Sunday");
        break;
    case 1:
        console.log("Today is: Monday");
        break;
    case 0:
        console.log("Today is: Tuesday");
        break;
    case 0:
        console.log("Today is: Wednesday");
        break;
    case 0:
        console.log("Today is: Thursday");
        break;
    case 0:
        console.log("Today is: Friday");
        break;
    case 0:
        console.log("Today is: Saturday");
        break;
    default:
        console.log("Invalid day index");
}

const temp = new Date();
let hours = temp.getHours();
let hoursampm = hours < 12 ? 'AM' : 'PM';
hours %= 12;
console.log("Current time is: " + hours + hoursampm + " : " + temp.getMinutes() + " : " + temp.getSeconds());


console.log("---------------------------------------\nZadatak 2");

const a = 5;
const b = 6; 
const c = 7;

s = (a+b+c)/2

P = Math.sqrt((s*(s-a)*(s-b)*(s-c)));
console.log("Povrsina trougla sa stranicama 5,6,7 je: " + P);


console.log("---------------------------------------\nZadatak 3");

let year;
do {
    year = prompt("Unesite godinu: ");
    if (year < 0 || year > temp.getFullYear()) console.log("(greska) Nepravilan unos godine. Ponovo unesite godinu");    
} while(year < 0 || year > temp.getFullYear());
// temp pomocna varijabla deklarisana u prvom zadatku

if((year%4 == 0) && (year%100 != 0) || (year%400 == 0)) console.log(year + " je prestupna godina.");
else console.log(year + " nije prestupna godina.");


console.log("---------------------------------------\nZadatak 4");

for(let i = 2014; i <= 2050; i++) {
    let pomocna = "1 January, " + i + " 00:00:00";
    const datee = new Date(pomocna);
    let dan = datee.getDay();
    if(dan == 0) console.log("Godine " + i + " 1. Januar je bio Nedjelja");
}


console.log("---------------------------------------\nZadatak 5");


const datumDanasnjiUBrojDana = () => {

    const temp = new Date();
    let day = temp.getDate();
    let month = temp.getMonth();
    let yearr = temp.getFullYear();

    februar = ((yearr%4 == 0) && (yearr%100 != 0) || (yearr%400 == 0)) ? 29 : 28;

    let daniUMjesecima = [31, februar, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let days = daniUMjesecima[month] - day;
    
    for(let i = month+1; i < 12; i++) days += daniUMjesecima[i];

    days -= 6;

    return days;
}

console.log("Broj dana do Bozica: " + datumDanasnjiUBrojDana());


console.log("---------------------------------------\nZadatak 6");

let num1 = prompt("Unesite prvi broj: ");
let num2 = prompt("Unesite drugi broj: ");

console.log("Rezultat mnozenja: " + num1*num2);
console.log("Rezultat dijeljenja: " + num1/num2);

console.log("---------------------------------------\nZadatak 7");

let tempInCelsius = 60;
let tempInFahrenheit = 45;
let cToF = tempInCelsius*1.8;
cToF += 32;

let fToC = (tempInFahrenheit-32)/1.8;


console.log(tempInCelsius + "C is " + cToF + "F");
console.log(tempInFahrenheit + "F is " + fToC + "C");


console.log("---------------------------------------\nZadatak 8");

let k = prompt("Unesite prvi broj: ");
let j = prompt("Unesite drugi broj: ");

k = parseInt(k);
j = parseInt(j);

let sum = 0;

if(j != k) sum = parseInt(k+j);
else sum = k+k+k;

console.log("Rezultat: " + sum);


console.log("---------------------------------------\nZadatak 9");

let odredjeniBroj = prompt("Unesite neki broj: ");
let razlika = odredjeniBroj - 19;
if(odredjeniBroj > 19) {
    let suma = Math.abs(razlika);
    suma = Math.pow(suma, 3);
    console.log("Trostruka apsolutna vrijednost razlike brojeva " + odredjeniBroj + " i 19: " + suma);
} else {
    let suma = Math.abs(razlika);
    console.log("Apsolutna vrijednost razlike brojeva " + odredjeniBroj + " i 19: " + suma);
}


console.log("---------------------------------------\nZadatak 10");

let prviBroj = parseInt(prompt("Unesi prvi broj: "));
let drugiBroj = parseInt(prompt("Unesi drugi broj: "));

const provjera = (prvii, drugii) => {

    if(prvii == 50 || drugii == 50) return true;
    if(prvii + drugii == 50) return true;

    return false;
}

console.log(provjera(prviBroj, drugiBroj));

console.log("---------------------------------------");