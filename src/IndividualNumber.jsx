import personService from "./services/persons";

function IndividualNumber(props) {
  const { name, number, id, persons, setPersons } = props;

  const removeName = () => {
    const newPersonList = persons.filter((currentPerson) => {
      if (currentPerson.id !== id) {
        return currentPerson;
      }
    });
    console.log(newPersonList);
    if (window.confirm("do you really want to delete???")) {
      personService.removeNumber(id);
      setPersons(newPersonList);
    }
  };

  return (
    <div>
      {name} {number}
      <button onClick={removeName}>delete</button>
    </div>
  );
}

export default IndividualNumber;
