//find by id
Array.prototype.fbi = function(id) {
	return this.find(x => x.id === id)
}
Array.prototype.fibi = function (id) {
	return this.findIndex(x => x.id === id)
}


//find by value
Array.prototype.fbv = function (v) {
	return this.find(x => x === v)
}
Array.prototype.fibv = function (v) {
	return this.findIndex(x => x === v)
}


// //remove by value 
// Array.prototype.rbv = function (v) {
// 	var index = this.findIndex(x => x === v)
// 	this.splice(index, 1)
// }
