function compareTime(dateTime1,dateTime2){
    let depTime = new Date(dateTime1);
    let arrTime = new Date(dateTime2);

    return depTime.getTime() < arrTime.getTime()
}

module.exports = {
    compareTime
};