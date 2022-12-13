
// Made by me
function mergeSortedArrays1(arr1, arr2) {
    let mergedSortedArray = [];

    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    let index1 = 0;
    let index2 = 0;

    while (index1 !== arr1.length && index2 !== arr2.length) {
        console.log(index1, ' - ', index2);
        const value1 = arr1[index1];
        const value2 = arr2[index2];

        if (value1 <= value2) {
            mergedSortedArray.push(value1);
            index1++;
        } else if (value1 > value2) {
            mergedSortedArray.push(value2);
            index2++;
        }
    }
    console.log(index1, ' - ', index2);
    const leftOver1 = arr1.slice(index1);
    const leftOver2 = arr2.slice(index2);

    mergedSortedArray = [...mergedSortedArray, ...leftOver1, ...leftOver2];

    return mergedSortedArray;
}


// Made by the teacher
function mergeSortedArrays(array1, array2){
  const mergedArray = [];

  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item){
   if(array2Item === undefined || array1Item < array2Item){
     mergedArray.push(array1Item);
     array1Item = array1[i];
     i++;
   }   
   else {
     mergedArray.push(array2Item);
     array2Item = array2[j];
     j++;
   }
  }
  return mergedArray;
}


console.log(mergeSortedArrays([0,3,4,31, 65], [4,6,30,70]));

// index1 = 3
// index2 = 2
// mergedLength = 7