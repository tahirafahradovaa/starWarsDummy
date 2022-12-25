import React, { useContext, useEffect, useState } from "react";
import { starwarsContext } from "./starwarscontext";
import "./F1.css";
import toastr from "toastr";
function Favorites() {
  let { characters, setCharacters } = useContext(starwarsContext);
  let filteredContext = characters.filter((q) => q.name);
  const deleteItem = (item) => {
    let filteredDelete = characters.filter((q) => q.name != item.name);
    setCharacters([...filteredDelete]);
    toastr.info("Removed");
  };
  const deleteAll = () => {
    setCharacters([]);
  };
  return (
    <>
      {" "}
      <h1> FAVORITES</h1>
      <button onClick={deleteAll}>Delete all</button>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Height</th>
            <th>Eye color</th>
            <th>Skin color</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredContext.map((Element) => {
            return (
              <>
                <tr>
                  <td>{Element.name}</td>
                  <td
                    style={{
                      backgroundColor:
                        Element.birth_year === "unknown"
                          ? "#412a2a"
                          : "#161B22",
                    }}
                  >
                    {Element.birth_year}
                  </td>
                  <td>{Element.height}</td>
                  <td>{Element.eye_color}</td>
                  <td>{Element.skin_color}</td>
                  <td>
                    <button onClick={() => deleteItem(Element)}>DELETE</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Favorites;
