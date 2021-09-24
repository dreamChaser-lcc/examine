// const fs = require('fs')

// fs.readFile('./httpServer.js',()=>{
//   setTimeout(() => {
//     console.log("s1");
//   });
//   setImmediate(() => {
//     console.log('d1');
//   });
// })

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log('p1');
  });
  process.nextTick(() => {
    console.log('n1');
  });
});
console.log('asnc start');
setTimeout(() => {
  Promise.resolve().then(() => {
    console.log('p1');
  });
  process.nextTick(() => {
    console.log('n1');
  });
});
console.log('asnc end');
