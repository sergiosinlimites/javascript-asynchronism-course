const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlAPI){
  const response = await fetch(urlAPI);
  return await response.json();
}

const requestThings = async (urlAPI) => {
  try {
    const products = await fetchData(`${urlAPI}/products`);
    const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
    const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);
    console.log(products[0]);
    console.log(product);
    console.log(category);
  } catch (err) {
    console.error(err);
  }
}

requestThings(API);
