var signedEarly = false;
var runnersAge = 19;
var raceNumber = Math.floor(Math.random() * 1000);
if (signedEarly == true) {
    raceNumber += 1000;
}
if (runnersAge > 18 && signedEarly === true) {
    console.log(`you will race at 9:30 am with the number ${raceNumber}`);
} else if (runnersAge > 18 && signedEarly === false) {
    console.log(`you will race at 11 pm with the number ${raceNumber}`);
} else if (runnersAge <= 18) {
    console.log(`you will race at 12.30 pm with the number ${raceNumber}`);
} else {
    console.log('See the Registration Desk');
}