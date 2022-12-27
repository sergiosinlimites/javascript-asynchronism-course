const promise = new Promise((resolve , reject) => {
  resolve('this is solved');
});

const cows = 15;

const countedCows = new Promise((resolve, reject) => {
  if(cows > 10){
    resolve(`min fullfiled, we have ${cows} cows in the farm`);
  } else {
    reject('we do not have enought cows in the farm');
  }
})

countedCows.then((res) => {
  console.log(res);
}).catch(err => console.error(err))
.finally(() => console.log('the end'));