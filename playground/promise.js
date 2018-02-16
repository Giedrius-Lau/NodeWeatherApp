var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a+b)
      } else {
        reject('Arguments must be numbers')
      }
    }, 1500);
  });
}

asyncAdd(12,'2').then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res) =>{
  console.log('47', res);
}).catch( (errorMessage) => {
  console.log(errorMessage);
});


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('It works');
//   },2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message)
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
