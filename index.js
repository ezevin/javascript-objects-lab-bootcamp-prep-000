var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({prop:1}, {prop2:2})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 const object.prop=1, object.prop2=2
 
}
function deleteFromObjectByKey(object, key) {
  
}
function destructivelyDeleteFromObjectByKey(object, key) {
  
}