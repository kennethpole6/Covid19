import React, { useState, useEffect, useRef } from "react";
import { Input, Divider, Row, Col } from "antd";
import "./App.css";
import Cards from "./components/Card/Card";
import { Context } from "./components/Context";
import SearchInput from "./components/SearchInput/SearchInput";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { Search } = Input;
  const [covidResults, setCovidResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("Philippines");
  const inputRef = useRef(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b3af1c2478msh77279a75dc3acbep13f2d7jsna957a919a1f1",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };

    const getData = async () => {
      const fetchData = await fetch(
        `https://covid-193.p.rapidapi.com/statistics?country=${country}`,
        options
      );
      const data = await fetchData.json();
      setCovidResults(data.response);
      setLoading(false);
    };
    getData();

    return () => {
      console.log("Fetching data...");
      setLoading(true);
    };
  }, [country]);

  const handleItems = (e) => {
    setCountry(e.target.value);
  };

  return (
    <Context.Provider
      value={{ covidResults, Search, inputRef, handleItems, country, loading }}
    >
      <SearchInput />
      <Divider>Results</Divider>
      <div className="search-results">
        <Row>
          {covidResults &&
            covidResults?.map((items) => {
              const { continent, country, day, deaths, cases } = items;
              return (
                <Col>
                  <Cards
                    continent={continent}
                    country={country}
                    today={day}
                    cases={cases}
                    deaths={deaths}
                  />
                </Col>
              );
            })}
        </Row>
      </div>
      <Footer />
    </Context.Provider>
  );
};
export default App;
