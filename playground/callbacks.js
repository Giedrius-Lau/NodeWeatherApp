var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Giedrius'
    }
    setTimeout(() => {
        callback(user);
    },500);
};

getUser(22, (userObject) => {
    console.log(userObject);
});