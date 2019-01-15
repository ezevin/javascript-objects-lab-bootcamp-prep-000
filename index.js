var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({prop:1}, {prop2:2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
 object[prop] =1, object[prop2] = 2
}
function deleteFromObjectByKey(object, key) {
  Object.assign({prop:1}, {prop2:2})
  var obj = {prop: 1 }
  var newObj = Object.assign ({}, 'prop')
  delete newObj.prop
}
function destructivelyDeleteFromObjectByKey(object, key) {
  
}