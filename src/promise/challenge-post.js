const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data){
  // fetch only works natively in Node 18
  return fetch(urlAPI, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
}

function putData(urlAPI, data){
  return fetch(urlAPI, {
    method: "PUT",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}

// fetch(`${API}/categories`).then(response => {
//   return response.json();
// }).then(response => {
//   console.log(response);
// })

const data = {
  "title": "Sweater",
  "price": 100,
  "description": "A description of the sweater",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
})

const updateData = {
  "title": "Black Sweater",
  "price": 50,
}

putData(`${API}/products/202`, updateData).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
})