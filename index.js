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
   object[key]
   var recipes = {prop:1}
  var obj = Object.assign({}, object)
  delete obj[key]
}
function destructivelyDeleteFromObjectByKey(object, key) {Object.assign({prop:1}, {prop2:2})
delete object.prop
}