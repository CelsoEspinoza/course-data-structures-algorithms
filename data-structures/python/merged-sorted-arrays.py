
a = [0,3,4,31, 65]
b = [4,6,30,70]

def mergeSortedArrays(arr1, arr2):
  point1 = 0
  point2 = 0
  mergedArray = []

  if len(arr1) == 0:
    return arr2
  if len(arr2) == 0:
    return arr1

  while not point1 == len(arr1) or not point2 == len(arr2):
    if point1 == len(arr1):
      mergedArray.append(arr2[point2])
      point2 += 1
      continue
    if point2 == len(arr2):
      mergedArray.append(arr1[point1])
      point1 += 1
      continue

    value1 = arr1[point1]
    value2 = arr2[point2]
    if value1 == value2:
      mergedArray.append(value1)
      mergedArray.append(value2)
      point1 += 1
      point2 += 1
    elif value1 < value2:
      mergedArray.append(value1)
      point1 += 1
    else:
      mergedArray.append(value2)
      point2 += 1

  return mergedArray 
    


print(mergeSortedArrays(a, b))
