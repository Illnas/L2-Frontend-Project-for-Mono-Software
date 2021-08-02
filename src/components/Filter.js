import React from "react";

const Filter = ({ filter, setFilter, item, setItem }) => {

  const sortByHighestHorsepower = () => {
    const sorted = [...item].sort((a, b) => {
      return b.Horsepower - a.Horsepower;
    })
    setItem(sorted);
}

const sortByLowestHorsepower = () => {
  const sorted = [...item].sort((a, b) => {
    return a.Horsepower - b.Horsepower;
  })
  setItem(sorted);
}

const sortByHighestMillesPerGallon = () => {
  const sorted = [...item].sort((a, b) => {
    return b.Miles_per_Gallon - a.Miles_per_Gallon;
  })
  setItem(sorted);
}

const sortByLowestMillesPerGallon = () => {
  const sorted = [...item].sort((a, b) => {
    return a.Miles_per_Gallon - b.Miles_per_Gallon;
  })
  setItem(sorted);
}

const sortByAlphabeticalOrder = () => {
  const sorted = [...item].sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
  setItem(sorted);
}

  return (
    <div className="input-group my-3">
      <input
        className="form-control"
        id="filter"
        name="filter"
        type="text"
        placeholder="Type car model to filter, e.g Ford"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      ></input>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort By
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#" onClick={sortByAlphabeticalOrder}>
            Alphabetical Order
          </a>
          <a className="dropdown-item" href="#" onClick={sortByHighestHorsepower}>
            Horsepower: High <i className="lni lni-arrow-right"></i> Low
          </a>
          <a className="dropdown-item" href="#" onClick={sortByLowestHorsepower}>
            Horsepower: Low <i className="lni lni-arrow-right"></i> High
          </a>
          <a className="dropdown-item" href="#" onClick={sortByHighestMillesPerGallon}>
            Milles per Gallon: High <i className="lni lni-arrow-right"></i> Low
          </a>
          <a className="dropdown-item" href="#" onClick={sortByLowestMillesPerGallon}>
            Milles per Gallon: Low <i className="lni lni-arrow-right"></i> High
          </a>
        </div>
      </div>
    </div>
  );
};

export default Filter;
