let driverNames = [];
const returnFirstTwoDrivers = function(driverNames) {
    return driverNames.slice(0, 2);
}

const returnLastTwoDrivers = function(driverNames){
    return driverNames.slice(1).slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(multiplier){

    return function(fare){return fare * multiplier};
}

const fareDoubler = createFareMultiplier(2);  

const fareTripler = createFareMultiplier(3); 

function selectDifferentDrivers(driverNames, returnFirstTwoDrivers){
   return returnFirstTwoDrivers(driverNames); 
    //return driverNames; 
}