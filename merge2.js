//Simple Sort Merge assumed presorted arrays, and arrays of same size

//Merge Sort with Duplicated
function merge(left, right){
  var leftIndex = 0;
  var rightIndex = 0;
  var sorted = [];

  while (sorted.length < (left.length + right.length) ){

    if(left[leftIndex] < right[rightIndex] || right[rightIndex] === undefined){
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return sorted;
}

//Merge Sort without Duplicates
function mergeSort2(left, right){
  var leftIndex = 0;
  var rightIndex = 0;
  var sorted = [];

  while (left[leftIndex] !== undefined || right[rightIndex] !== undefined ){
    var choosenVal;
    if(left[leftIndex] < right[rightIndex] || right[rightIndex] === undefined && left[leftIndex] !== undefined){
      choosenVal = left[leftIndex];
      leftIndex++;
    } else {
      choosenVal = right[rightIndex]; 
      rightIndex++;
    }

    if(!sorted.includes(choosenVal)){
      sorted.push(choosenVal);
    }
  }


  return sorted;
}

function sort2(array){

  var leftArray = array.slice(0 , array.length/2);
  var rightArray = array.slice(array.length/2 , array.length);

  return mergeSort(leftArray , rightArray);
}
