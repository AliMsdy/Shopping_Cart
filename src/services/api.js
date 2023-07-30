import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

async function getData() {
  try {
    let response = await axios.get(`/products`);
    return response.data;
  } catch (error) {
    console.log("an error occurred: ", error);
  }
}

export { getData };
