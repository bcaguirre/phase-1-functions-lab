// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber){
   const streetNumber2 = 42
    return Math.abs(streetNumber-42)
}
   
function distanceFromHqInFeet(streetNumber){
    const blocks = distanceFromHqInBlocks(streetNumber);
    return blocks * 264
}

function distanceTravelledInFeet(streetNumber, streetNumber2){
    return Math.abs(streetNumber-streetNumber2)* 264
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400){
        return 0;
    } else if (feet <= 2000){
        return 2.56;
    } else if (feet > 2000 && feet <= 2500){
        return 25;
    } else if (feet >= 2500){
        return 'cannot travel that far';
    }
}





















