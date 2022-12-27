function sum(a, b){
  return a + b;
}

function mult(a, b){
  return a * b;
}

function subs(a, b){
  return a - b;
}

function calc(a, b, callback){
  return callback(a, b);
}

console.log(calc(1,2,sum))

function greeting(name){
  console.log(`Hola, ${name}`)
}

setTimeout(greeting, 2000, 'Nicolas');