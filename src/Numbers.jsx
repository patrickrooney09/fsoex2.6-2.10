import IndividualNumber from "./IndividualNumber";

function Numbers(props) {
  const { persons, setPersons } = props;

  return (
    <div>
      {persons.map((currentPerson) => {
        if (currentPerson.display === "on") {
          return (
            // <div key={currentPerson.name}>
            //   {currentPerson.name} {currentPerson.number}
            //   <button onClick={removeName(currentPerson.name)}>delete</button>
            // </div>
            <IndividualNumber
              key={currentPerson.name}
              name={currentPerson.name}
              number={currentPerson.number}
              id={currentPerson.id}
              persons={persons}
              setPersons={setPersons}
            />
          );
        }
      })}
    </div>
  );
}

export default Numbers;
