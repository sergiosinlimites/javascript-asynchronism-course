const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlAPI){
  return fetch(urlAPI)
}

// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log('finalizado');
//   })
  

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products?.length);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then(response => response.json())
  .then(product => {
    console.log(product?.title);
    return fetchData(`${API}/category/${product?.category?.id}`);
  })
  .then(response => response.json())
  .then(category => {
    console.log(category?.name);
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    console.log('Has finished');
  })