const axios = require("axios");

const url = "http://localhost:3030/productos";

axios
  .get(url)
  .then((res) => {
    console.log(res.data);
})
  .catch((err) => {
    console.log(err);
});

axios
  .get(url + "/622d0b47e11e8cc8bc447609")
  .then((res) => {
    console.log(res.data);
})
  .catch((err) => {
    console.log(err);
});

axios.post(url, {
  nombre: "headset",
  precio: 2500,
  thumb: "linkHeadset",
})
.then(res => {
    console.log(res.data);
})
.catch(err => {
    console.log(err);
})

axios
.put(url + "/622d0b47e11e8cc8bc447609", {
    nombre: "smartwatch",
    precio: 1234
})
.then(res => {
    console.log(res.data);
})
.catch(err => {
    console.log(err);
})