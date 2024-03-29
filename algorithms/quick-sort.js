// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// [1, 2, 4, 5, 6, 44, 63, 87, 99, 283]

// Divede and conquer. 
// Time complexity: Best => O(nlog(n)) | Average => O(nlog(n)) | Worst => O(n^2)
// Space complexity: Worst => O(log(n))
// It's better then MergeSort but if you don't pick a good pivot, then the worst case is n^2.
// It has better space complexity thatn MergeSort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);