new Promise(function(resolve, reject) {
	setTimeout(function() { resolve(10); }, 1000);
})
.then(function(result) {
	console.log('resolve: ' + result);
});

new Promise(function(resolve, reject) {
	setTimeout(function() { reject(10); }, 2000);
})
.then(function(ret1) {
	console.log('ret1 : ' + ret1);
}, function(ret2){
	console.log('ret2 : ' + ret2);
});

new Promise(function(resolve, reject) { 
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});

new Promise(function(resolve, reject) {
	setTimeout(function() { reject('Done!'); }, 4000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); });

new Promise(function(resolve, reject) {
	setTimeout(function() { reject('Done!'); }, 5000);
})
.then(function(e) { console.log('done', e); }, function(e) { console.log('done2', e)})
.catch(function(e) { console.log('catch: ', e); });
