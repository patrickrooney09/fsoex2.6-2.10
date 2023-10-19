import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      // id: persons.length + 1,
      number: newNumber,
    };
    const duplicateCheck = (persons, name) => {
      let isDuplicate = false;
      persons.map((currentPerson) => {
        if (currentPerson.name.toLowerCase() === name.toLowerCase()) {
          return (isDuplicate = true);
        }
      });
      return isDuplicate;
    };

    if (duplicateCheck(persons, newName) !== false) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, newPerson]);
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((currentPerson) => {
        return (
          <div key={currentPerson.name}>
            {currentPerson.name} {currentPerson.number}
          </div>
        );
      })}
    </div>
  );
}

export default App;
