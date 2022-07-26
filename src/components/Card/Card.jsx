import React from 'react'
import { Card, Typography } from 'antd'

const { Text } = Typography
const Cards = ({ continent, country, today, deaths, cases }) => {
  return (
    <div>
        <Card type="inner" title={country} style={{ width: 350}} key={cases.new}>
            <h4 style={{color: '#1890ff'}}>
              New Cases:
              <Text type="secondary"> {cases.new} </Text>  
              / Deaths: 
              <Text type="secondary"> {deaths.new}</Text>
            </h4>
            <h5>Continent: {continent}</h5>
            <h5>Total death:  {deaths.total}</h5>
            <h5>Active: {cases.active}</h5>
            <p style={{color:'#8c8c8c', fontSize:'.8em'}}>Date: {today}</p>
        </Card>
    </div>
  )
}

export default Cards