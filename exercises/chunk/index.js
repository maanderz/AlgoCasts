// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create empty array to hold chunks called chunked
  let chunked = [];
  // for each element in the unchunked array
  for (let e of array){
    // retrieve the last element in chunked
    const last = chunked[chunked.length - 1]
    console.log(last)
    // if last element is undefined or if its length is equal to chunk size
    if (!last || last.length === size){
      //push a new chunk into chunked with the current element
      chunked.push([e]);
    } else {
      // else add the current element into the chunk
      last.push(e);
    }    
  }  
  return chunked;
  // return chunked
}

console.log(chunk([1,2,3,4,5,6],6))

module.exports = chunk;
