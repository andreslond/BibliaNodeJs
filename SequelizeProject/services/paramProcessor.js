
module.exports = function (params) {
    //create an object.
    let newObj = {};
    params.forEach((value) => {
        let aux = value.split("=");
        newObj[aux[0].replace('--', '')] = aux[1];
    });
    return newObj;
}