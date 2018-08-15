var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 6000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 1000);
});
var req3 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { reject('Third!'); }, 5000);
});
var req4 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { reject('Fourth!'); }, 2000);
});
Promise.race([req1, req2, req3, req4]).then(function(one) {
	console.log('Then: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});