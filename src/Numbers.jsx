function Numbers(props) {
  const { persons } = props;

  return (
    <div>
      {persons.map((currentPerson) => {
        if (currentPerson.display === "on") {
          return (
            <div key={currentPerson.name}>
              {currentPerson.name} {currentPerson.number}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Numbers;
