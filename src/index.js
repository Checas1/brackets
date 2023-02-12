module.exports = function check(str, bracketsConfig) {
    let array = [...str]
    console.log(array)
    if (str.length % 2 != 0) return false
    for(let i = 0; i < array.length; i++) {
      for (let item of bracketsConfig){
        if(array[i] == item[0] && array[i+1] == item[1]){
          array.splice(i, 2)
          i = -1
        }
      }
    }
    return (array.length == 0) ? true : false
}
