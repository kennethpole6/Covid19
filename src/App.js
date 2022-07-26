import React, { useState, useEffect, useRef } from "react";
import { Card, Input, Divider, Row, Col, Typography } from "antd";
import './App.css'
import Cards from './components/Card/Card'

const { Text } = Typography;

export default function App() {
  const { Search } = Input;
  const [covidResults, setCovidResults] = useState([])
  const [country, setCountry] = useState("Philippines")
  const inputRef = useRef(null)
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b3af1c2478msh77279a75dc3acbep13f2d7jsna957a919a1f1',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };
    
    const getData = async () => {
      const fetchData = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, options)
      const data = await fetchData.json()
      setCovidResults(data.response)
    }
    getData()

    return () => {
      console.log("Fetching data...")
    }
  },[country])

  const handleItems = (e) => {
    setCountry(e.target.value)
  }

  return (
    <div>
      <Card title="Covid-19 Tracker" className="search-cards">
        <Text type="secondary">Note: The data refreshes every 24 hours</Text>
        <br/>
        <Search 
          placeholder="Search any countries..."
          allowClear
          enterButton="Search"
          size="large"
          ref={inputRef}
          value={country}
          onChange={handleItems}
        />
      </Card>
      <Divider dashed="true">Results</Divider>
      <div className="search-results">
        <Row>
            {covidResults.map(items => {
              const {continent,country, day, deaths, cases} = items
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
              )
            })}
        </Row>
      </div>
      <div className="footer">
        <Text type="secondary">Covid 19 Tracker ©2022 Created by Kenneth Pole</Text>
      </div>
    </div>
  );
}
