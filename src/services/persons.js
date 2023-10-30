import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const removeNumber = (id) => {
  console.log(id);
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => {
      console.log("Deleted successfully", response.data);
    })
    .catch((error) => {
      console.error("error deleting", error);
    });
};

export default { getAll, create, removeNumber };
