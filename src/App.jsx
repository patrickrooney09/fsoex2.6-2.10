import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Numbers from "./Numbers";
import axios from "axios";
import personService from "./services/persons";
import Notification from "./Notification";
import Error from "./Error";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Error message={errorMessage} />
      <Filter search={search} setSearch={setSearch} persons={persons} />
      <h2>Add A New</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setNotificationMessage={setNotificationMessage}
        setErrorMessage={setErrorMessage}
      />

      <h2>Numbers</h2>
      <Numbers persons={persons} setPersons={setPersons} />
    </div>
  );
}

export default App;
