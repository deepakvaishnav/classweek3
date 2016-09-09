console.log('is it working?');

// I will make an array with a list of different fruits
var fruitsArray = ['Apple','Banana','Peach','Pineapple'];

// This Variable will find the first item in my fruitsArray
var firstFruit = fruitsArray [0];

// I will use if else conditional to see if the first
// item in my fruitsArray is Apple.
// We will also check whether the first fruit is Apple.
if (firstFruit == 'Apple'){
  console.log('The first fruit is Apple.');
}
else if (fruitsArray[2] == 'Apple')
{
  console.log('The third fruit is Peach.');
}
else {
  console.log('The first fruit is not Apple.');
  console.log('Actually, the first fruit is '+firstfruit);
}
