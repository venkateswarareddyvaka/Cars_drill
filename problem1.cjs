// Finding a car based on their Id;

function findInformationOfacar(carsArray,carsId){
    for (let index=0;index<carsArray.length;index++){
        if(carsArray[index].id===carsId){
            return (`Car ${carsId} is a ${carsArray[index].car_year} ${carsArray[index].car_make} ${carsArray[index].car_model}`);
        }
    }
}

module.exports=findInformationOfacar;

// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"