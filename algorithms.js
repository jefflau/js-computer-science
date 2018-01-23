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
  let middle = Math.ceil(array.length/2)
  let leftArray = array.slice(0, middle)
  let rightArray = array.slice(middle)
  
  let sortedLArray = mergeSort(leftArray)
  let sortedRArray = mergeSort(rightArray)

  function merge(leftArray, rightArray){
    let Lp = 0
    let Rp = 0
    const outputArray = []
    while(outputArray.length < leftArray.length + rightArray.length){
      
      if(Lp === leftArray.length) {
        outputArray.push(leftArray[Lp])
        Rp++
      } else if(Rp === rightArray.length) {
        outputArray.push(rightArray[Rp])
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

  let pivot = array[array.length - 1]
  let leftList = []
  let rightList = []

  for(let i = 0; i < array.length - 1; i++){
    if(array[i] < pivot) {
      leftList.push(array[i])
    } else {
      rightList.push(array[i])
    }
  }

  return [...quickSort(leftList), pivot, ...quickSort(rightList)]
}

array.Prototype.sort = function(callback){
  //implement array.sort
}