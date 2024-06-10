function callBack(param, callback) {
  console.log('param: ', param)
  callback(param)
}



callBack('Hello', function(param) {
  console.log('Callback called: ', param)
})

