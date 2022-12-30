function* theGen(){
  yield 1;
  yield 2;
  yield 3;
}

function* iterator(array){
  for(let value of array){
    yield value;
  }
}

const it = iterator(['Juan', 'Ana', 'Sergio']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(url){
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

async function* iterateData(urlAPI){
  const products = await fetchData(`${urlAPI}/products`);
  yield console.log(products.length);;

  const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
  yield console.log(product);

  const category = await fetchData(`${urlAPI}/categories/${product?.category?.id}`);
  yield console.log(category);
}

const requests = iterateData(API);
requests.next()
requests.next()
requests.next()