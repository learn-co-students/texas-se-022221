const CatFilter = (props) => {
  return (
    <div>
      <h3>Search by Name</h3>
      <input type="text" placeholder="filter" onChange={props.handleSearchTerm}></input>
      <hr/>
    </div>
  );
};

export default CatFilter;
