// sorting based on alphabetical order

function sortCars(carsArray){
    let cars_model=[];
    for (let index=0;index<carsArray.length;index++){
        cars_model.push(carsArray[index].car_model);
    }
    return cars_model.sort()
}

module.exports = sortCars;