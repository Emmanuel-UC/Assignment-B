/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: function(){ alert("Beep") }
        }
    }
}



/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.

house.areas.livingRoom['items'].push('Dining Table');
console.log(house.areas.livingRoom['items']);

// (2) Add a stove to the kitchen.

house.areas.kitchen['items'].push('Stove');
console.log(house.areas.kitchen['items']);

// (3) Remove the washing machine from bedroomOne.

house.areas.bedroomOne['items'].pop('washing machine');
console.log(house.areas.bedroomOne['items']);

// (4) Change the color of the car to blue.

house.garage.car['color']='Blue';
console.log(house.garage.car['color']);

// (5) Add a another car to the garage with a honk function.


Object.assign(house.garage,{ carTwo: {
    color: 'Green',
    wheels: 4,
    honk: function(){ alert("Beep") }
}});

console.log(house.garage);

// (6) Make the new car honk.

    console.log(house.garage.carTwo.honk());

// (7) If the house has a garden, console.log the name of the flower.

if(house.garden[0]===true){
    console.log(house.garden[1]);
}

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function

var changeChair = house.areas.kitchen.items[1].replace("broken","new");
house.areas.kitchen.items[1] = changeChair;
console.log(house.areas.kitchen['items']);

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.

var numberOfAreas = Object.keys(house.areas).length;
var sTag = "Total areas = ";
console.log(sTag+numberOfAreas);

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.

var bedRoomOne= Object.values(house.areas.bedroomOne.items).length;
var bedRoomTwo= Object.values(house.areas.bedroomTwo.items).length-1;
var textO="Total beds = ";
var totalNumberOfBeds = bedRoomOne+bedRoomTwo;

console.log(textO+totalNumberOfBeds);