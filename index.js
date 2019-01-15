var recipes = {}

function objects() {recipes = {prop: 1} }

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({prop:1}, {prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return recipes.prop2 = "2"
 
}
function deleteFromObjectByKey(object, key) {
  
}
function destructivelyDeleteFromObjectByKey(object, key) {
  
}