var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 2000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { reject('Second!'); }, 1000);
});
Promise.all([req1, req2]).then(function(results) {
	console.log('Then: ', results);
}).catch(function(err) {
	console.log('Catch: ', err);
});


var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 5000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 3000);
});
var req3 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Third!'); }, 4000);
});
Promise.all([req1, req2, req3]).then(function(results) {
	console.log('Then: ', results);
}).catch(function(err) {
	console.log('Catch: ', err);
});