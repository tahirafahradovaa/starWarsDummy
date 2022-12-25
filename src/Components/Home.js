import React, { useEffect, useState, useContext } from "react";
import "./F1.css";
import toastr from "toastr";
import { starwarsContext } from "./starwarscontext";
function Home() {
  let { characters, setCharacters } = useContext(starwarsContext);
  const [loading, setLoading] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [test, setTest] = useState("1");
  const [pagination, setPagination] = useState("1");
  const getData = () => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people?page=${pagination}`)
      .then((res) => res.json())
      .then((data) => {
        setDrivers(data.results);
        setTest(data.count);
        setLoading(false);
      });
  };
  const addToFavorites = (item) => {
    let filteredFavorites = characters.find((q) => q.name == item.name);

    if (!filteredFavorites) {
      setCharacters([...characters, item]);
    }
    toastr.info("Added to Favorites");
  };

  let num = Math.ceil(test / 10);
  useEffect(() => {
    getData();
  }, [pagination]);
  const getValue = (e) => {
    setPagination(e.target.innerText);
    getData();
  };
  const spanGen = () => {
    const content = [];
    for (let i = 1; i <= num; i++) {
      content.push(<span onClick={getValue}>{i}</span>);
    }
    return content;
  };

  return (
    <>
      <h1> HOME PAGE</h1>
      <table className="table  table-hover table-dark table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Height</th>
            <th>Eye color</th>
            <th>Skin color</th>
            <th>Add to Favorite</th>
          </tr>
        </thead>

        {loading ? (
          <div className="loader-cont col-8">
            <span className="loader"></span>
          </div>
        ) : (
          <tbody>
            {drivers.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td
                      style={{
                        backgroundColor:
                          item.birth_year === "unknown" ? "#412a2a" : "#212529",
                      }}
                    >
                      {item.birth_year}
                    </td>
                    <td>{item.height}</td>
                    <td>{item.eye_color}</td>
                    <td>{item.skin_color}</td>
                    <td>
                      <button onClick={() => addToFavorites(item)}>
                        Add To favorite
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        )}
      </table>
      <div className="pagination-container">{loading ? "" : spanGen()}</div>
    </>
  );
}

export default Home;
