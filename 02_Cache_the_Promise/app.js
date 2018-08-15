var userCache = {};

function getUserDetail(username) {
    console.log(username);
    if (userCache[username]) {
        console.log('Cached: ' + username);
        return Promise.resolve(userCache[username]);
    }

    return fetch('users/' + username + '.json')
        .then(function (response) {
            userCache[username] = response;
            return response.json();
        }).then(function (json) {
            var id = json.id;
            var name = json.name;
            console.log(id + ' ' + name);
        })
        .catch(function () {
            throw new Error('Could not find user: ' + username);
        })
}

var taro = getUserDetail('taro');
setTimeout(() => {
    var taro2 = getUserDetail('taro');
}, 1000);