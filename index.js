function returnFirstTwoDrivers(driversArray) {
  return driversArray.slice(0, 2)
}

function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2)
}   

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare, multiplier = 5) {
    return function fareQuintupler() {
        return (fare * multiplier);
    }
}

const fareDoubler = function(fare) {
    createFareMultiplier(fare, 2);
    return (fare * 2);
}

const fareTripler = function(fare) {
    createFareMultiplier(fare, 3);
    return (fare * 3);
}

function selectDifferentDrivers(driversArray, func) {
    console.log('DRIVERS', driversArray)
    console.log('FUNC', func);
    return func(driversArray)
}