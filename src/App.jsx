import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Numbers from "./Numbers";
import axios from "axios";

function App() {
  // const [persons, setPersons] = useState([
  //   { name: "Arto Hellas", number: "040-123456", display: "on" },
  //   { name: "Ada Lovelace", number: "39-44-5323523", display: "on" },
  //   { name: "Dan Abramov", number: "12-43-234345", display: "on" },
  //   { name: "Mary Poppendieck", number: "39-23-6423122", display: "on" },
  // ]);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} persons={persons} />
      <h2>Add A New</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />

      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  );
}

export default App;
