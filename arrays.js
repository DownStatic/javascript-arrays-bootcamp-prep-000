var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr, el){
  return [el, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr,el){
  return arr.unshift(el)
}

function addElementToEndOfArray(arr,el){
  return [...arr, el]
}

function destructivelyAddElementToEndOfArray(arr,el){
  return arr.push(el)
}

function accessElementInArray(arr,index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  var cut = arr.slice(1)
  return cut
}

function destructivelyRemoveElementFromEndOfArray(arr){
  
}