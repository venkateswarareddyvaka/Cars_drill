// Finding last car in given array

function findLastCar(carsArray){
    let lastCar=carsArray[(carsArray.length)-1];
    return `Last car is a ${lastCar.car_make} ${lastCar.car_model}`;
}

module.exports = findLastCar