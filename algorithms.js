function bubbleSort(array) {
  for(let j = 0; j < array.length; j++){
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]) {
          swap(array, i, i + 1)
        }
    }
  }

  function swap (array, first, second){
    let item1 = array[first]
    let item2 = array[second]
    
    array[first] = item2
    array[second] = item1
    return array
  }

  return array
}

// O(n * log(n))

function mergeSort(array){
  if(array.length < 2){
    return array
  }

  let leftArray = array.slice(0, Math.ceil(array.length/2))
  let rightArray = array.slice(Math.ceil(array.length/2))
  
  let sortedLArray = mergeSort(leftArray)
  let sortedRArray = mergeSort(rightArray)

  function merge(leftArray, rightArray){
    let Lp = 0
    let Rp = 0
    let outputArray = []
    while(outputArray.length < leftArray.length + rightArray.length){
      
      if(Lp === leftArray.length) {
        outputArray = [...outputArray, rightArray[Rp]]
        Rp++
      } else if(Rp === rightArray.length) {
        outputArray = [...outputArray, leftArray[Lp]]
        Lp++
      } else if(leftArray[Lp] < rightArray[Rp]){
        outputArray.push(leftArray[Lp])
        Lp++
      } else {
        outputArray.push(rightArray[Rp])
        Rp++
      }
    }
    
    return outputArray
  }

  return merge(sortedLArray, sortedRArray)
}

function quickSort(array){
  if(array.length < 2){
    return array
  }

  let pivotPos = array.length - 1
  let pivot = array[pivotPos]
  let leftList = []
  let rightList = []
  let leftListSorted, rightListSorted

  for(let i = 0; i < pivotPos; i++){
    if(array[i] < pivot) {
      leftList.push(array[i])
    } else {
      rightList.push(array[i])
    }
  }

  leftListSorted = quickSort(leftList)
  rightListSorted = quickSort(rightList)

  return [...leftListSorted, pivot, ...rightListSorted]
}