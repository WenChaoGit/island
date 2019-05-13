
const loginType = {
    USER_MINI_PROGRAM:100,
    USER_EMAIL:101,
    USER_MOBILE:102,
    isInLoginType
}

function isInLoginType(val){
    let arrType = Object.values(loginType)
    return arrType.includes(val)
}

module.exports = {
    loginType
}