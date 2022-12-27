const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI, callback){
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlAPI, true);
  xhttp.onreadystatechange = function (event) {
    if(xhttp.readyState === 4){ // request finished
      if(xhttp.status === 200){ // document found, OK
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error in ${urlAPI}>`);
        callback(error, null);
      }
    }
  }

  xhttp.send();
}

fetchData(`${API}/products`, function(err1, data1){
  if(err1) return console.error(err1);
  fetchData(`${API}/products/${data1[0].id}`, function(err2, data2){
    if(err2) return console.error(err2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function(err3, data3){
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    })
  })
})