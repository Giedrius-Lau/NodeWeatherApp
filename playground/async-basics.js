console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
},1000);

setTimeout(() => {
  console.log('I222222nside of callback');
},0);

console.log('Finishing up');
