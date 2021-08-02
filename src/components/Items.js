import React from "react";

const Items = ({ items, loading, filter, item, first, last }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(" ");
  }

  const itemName = item.filter(
    (f) =>
      f.name.indexOf(filter.toLowerCase()) > -1 ||
      filter === "" ||
      f.name.indexOf(filter) > -1
  );

  let sliced = itemName.slice(first, last);

  /*   const filtering = () => {
     return nameTest
        .filter(
          (f) =>
            f.indexOf(filter.toLowerCase()) > -1 ||
            filter === "" ||
            f.indexOf(filter) > -1
        )    
    } 
    
    sliced.map((f) => (
          <li className="list-group-item" key={f}>
            {capitalizeTheFirstLetterOfEachWord(f)}
          </li>
        
        )) */

  return (
    <ul className="list-inline m-4" id="lists">
      {sliced.map((f) => (
        <li className="list-inline-item ml-5 mb-3" key={f.Id}>
          <div className="card" style={{width: 18 + "rem"}}>
            <div className="card-body">
              <h5 className="card-title">{capitalizeTheFirstLetterOfEachWord(f.name)}</h5>
              <p className="card-text">Acceleration: {f.Acceleration}</p>
              <p className="card-text">Milles per gallon: {f.Miles_per_Gallon}</p>
              <p className="card-text">Cylinders: {f.Cylinders}</p>
              <p className="card-text">Displacement: {f.Displacement}</p>
              <p className="card-text">Horsepower: {f.Horsepower}</p>
              <p className="card-text">Weight in lbs: {f.Weight_in_lbs}</p>
              <p className="card-text">Year: {f.Year}</p>
              <p className="card-text">Origin: {f.Origin}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Items;
