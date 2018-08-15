// The new Promise() constructor should only be used for legacy async tasks,
// like usage of setTimeout or XMLHttpRequest. A new Promise is created with the
// new keyword and the promise provides resolve and reject functions to the
// provided callback:

function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function () {
            reject(Error("Network Error"));
        };

        req.send();
    });
}

var url = 'http://localhost:5500/01_XMLHttpRequest/test.json';
get(url).then(function(response){
    console.log("Success!", response);
}, function(error){
    console.log("Failed!", error);
})