var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr, el){
  return arr.unshift(el)
}

function destructivelyAddElementToBeginningOfArray(arr,el){
  return (arr[0] = el)
}

function addElementToEndOfArray(arr,el){
  return arr.push(el)
}

function destructivelyAddElementToEndOfArray(arr,el){
  return
}