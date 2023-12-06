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

const updateNumber = (id, person) => {
  return (
    axios
      .put(`${baseUrl}/${id}`, {
        name: person.name,
        number: person.number,
        display: "on",
        // Other properties to be updated on the server
      })
      // .then((response) => {
      //   console.log("Updated user:", response.data);
      // })
      .catch((error) => {
        console.error("Error updating user:", error);
      })
  );
};

export default { getAll, create, removeNumber, updateNumber };
