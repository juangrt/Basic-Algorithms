function sort(array){
  //Error checking
  if (!Array.isArray(array)){
    return null;
  }

  var chunks = [];

  array.forEach(function(item){
    if (typeof item !== 'number'){
      throw new Error("Invalid data, expects a number")
    }
    chunks.push([item]);
  });

  while(chunks.length > 1){
    var updatedChunks = []

    for(var i = 0 ; i < chunks.length; i += 2){
      var left = chunks[i] || [];
      var right = chunks[i+1] || []

      updatedChunks.push(merge(left , right));
    }

    chunks = updatedChunks;
  }

  return chunks[0] || [];
}


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


//rRegEx search
function search(list , pattern){
  var regexString = '';

  pattern.split(/(?=[A-Z])/).forEach(function(item){
    regexString += item + '[a-z]+';
  });

  var foundItems = [];

  list.forEach(function(item){
    if(item.match(regexString)){
      foundItems.push(item);
    }
  });

  return foundItems;
}