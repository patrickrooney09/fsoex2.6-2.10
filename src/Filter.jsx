function Filter(props) {
  const { search, setSearch, persons } = props;

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    const lowerCaseSearch = event.target.value.toLowerCase();
    persons.map((currentPerson) => {
      if (!currentPerson.name.toLowerCase().includes(lowerCaseSearch)) {
        currentPerson.display = "off";
      } else {
        currentPerson.display = "on";
      }
    });
  };

  return (
    <form>
      <div>
        filter shown with
        <input value={search} onChange={handleSearch}></input>
      </div>
    </form>
  );
}

export default Filter;
