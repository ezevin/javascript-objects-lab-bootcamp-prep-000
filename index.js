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
  
  var obj = {prop:'1'}; {prop2:'2'}
  var recipes = Object.assign({}, obj)
  recipes
  delete recipes.prop
}
function destructivelyDeleteFromObjectByKey(object, key) {
  
}