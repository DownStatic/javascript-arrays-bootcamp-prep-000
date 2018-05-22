var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr, el){
  return arr.unshift(el)
}

function destructivelyAddElementToBeginningOfArray(arr,el){
  return arr[1] = el
}