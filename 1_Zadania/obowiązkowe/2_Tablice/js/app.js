//ZADANIE 0

function distFromAvarage(inputArray)
{
    var sum=0;
    for(var i=0; i<inputArray.length; i++)
    {
        sum+=inputArray[i];
    }
    var averge = sum/inputArray.length;
    var newArray = [];

    for(var i=0; i<inputArray.length; i++)
    {
        newArray.push(inputArray[i]-averge);
    }
    return newArray;
}

distFromAvarage([1,2,3,4,5,6,7]);

//ZADANIE 1

var array=["gruszka","jablko","sliwka","morela"];
console.log(array[0]," ", array[array.length-1]);
for(var i=0; i<array.length;i++)
{
    console.log(array[i]);
}

//ZADANIE 3

function printTable(array)
{
    for(var int i=0; i<array.length;i++){
        console.log(array[i]);
    }
}

printTable([1,2,3,4]);

//ZADANIE 4

function multiply(array)
{
    var multi=1;
    for(var i=0;i<array.length;i++)
    {
       multi=multi*array[i];
    }
    return multi;
}
multiply([1,2,3,4,5,6,7]);

//ZADANIE 5

function getEvenAvarage(array)
{
    var sum = 0;
    var counter = 0;
    array.forEach(element =>{
        if(element % 2===0)
        {
            sum=sum+element;
            counter++;
        }
    });
    if(counter===0) return null;
    return sum/counter;
}

console.log(getEvenAvarage([1,2,3,4,5,6,7]));

//ZADANIE 6

function sortArray(array)
{
    array.sort((a,b) => a - b);
    return array;
}
sortArray([145,11,3,64,4,6,10])

//ZADANIE 7

function addArrays(firstArray, secondArray) {
	var count = Math.max(firstArray.length, secondArray.length);
	var finalArray = [];
	
	for(var i = 0; i < count; i++) {
		if(firstArray[i] === undefined) {
			firstArray[i] = 0;
		}
		if(secondArray[i] === undefined) {
			secondArray[i] = 0;
		}
		
		finalArray[i] = firstArray[i] + secondArray[i];
	}
	console.log(finalArray);
}
addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);