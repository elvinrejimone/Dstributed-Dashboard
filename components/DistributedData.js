import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios";


const MasterNodeURL = 'https://us-central1-abiding-topic-335320.cloudfunctions.net/Distributed-master';




export default function DistributedData() {
  const [AppStoreData, setAppStoreData] = useState([]);
  const [keyArray, setKeyArray] = useState([]);
  const [currView, setCurrView] = useState("0");


    // var keys=[];

  const getDataFromInput = ( type, valueText) => {
    axios.post(MasterNodeURL, {
        message: "filter",
        type: type,
        value: valueText
      }).then(response => {
        console.log(response.data);
        setAppStoreData(response.data.Result);
        var keys = [];
        for(var k in response.data.Result[0]) keys.push(k);
        console.log(keys);
        setKeyArray(keys);
        setCurrView("1");
    });
  }
  

  return (
    <div>
       <Card style={{ width: "100%"}}>
        <Card.Header>
        <Card.Title className="text-success" > <h3 className="text-primary"> Mobile App Data View </h3> </Card.Title>
        </Card.Header>
        <Card.Body>        
        <Accordion defaultActiveKey={currView} flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Query</Accordion.Header>
              <Accordion.Body>
              <Card style={{ width: "100%"}}>
                    <Card.Body>        
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <h4> Category :</h4>
                            <Button size="sm" onClick={() => getDataFromInput("Category", "Health & Fitness")} variant="primary">Health & Fitness</Button>{' '}
                            <Button size="sm" onClick={() => getDataFromInput("Category", "Travel & Local")} variant="secondary">Travel & Local</Button>{' '}
                            <Button size="sm" onClick={() => getDataFromInput("Category", "Business")} variant="success">Business</Button>{' '}
                            <Button size="sm" onClick={() => getDataFromInput("Category", "Entertainment")} variant="warning">Entertainment</Button>{' '}
                            <Button size="sm" onClick={() => getDataFromInput("Category", "Productivity")} variant="primary">Productivity</Button> {' '}
                            <Button size="sm" onClick={() => getDataFromInput("Category", "Lifestyle")} variant="warning">Lifestyle</Button> {' '}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h4> Size :</h4>
                            <Button onClick={() => getDataFromInput("Size", "<=100")} variant="primary">Size Less than 100MB</Button>{' '}
                            <Button onClick={() => getDataFromInput("Size", ">100")} variant="warning">Size more than 100MB</Button>{' '}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h4> Ad Supported :</h4>
                            <Button onClick={() => getDataFromInput("Ad", "True")} variant="success">Advertisement Supported</Button>{' '}
                            <Button onClick={() => getDataFromInput("Ad", "False")} variant="danger">Advertisement Not Supported</Button>{' '}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h4> Free or Paid :</h4>
                            <Button onClick={() => getDataFromInput("Price", "0")} variant="success">Free</Button>{' '}
                            <Button onClick={() => getDataFromInput("Price", "paid")} variant="danger">Paid</Button>{' '}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h4> Minimum Installs :</h4>
                            <Button onClick={() => getDataFromInput("Minimum-Installs", "10")} variant="secondary">10</Button>{' '}
                            <Button onClick={() => getDataFromInput("Minimum-Installs", "100")} variant="primary">100</Button>{' '}
                            <Button onClick={() => getDataFromInput("Minimum-Installs", "500")} variant="warning">500</Button>{' '}
                            <Button onClick={() => getDataFromInput("Minimum-Installs", "1000")} variant="success">1000</Button>{' '}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h4> Content Rating :</h4>
                            <Button onClick={() => getDataFromInput("Content-Rating", "Teen")} variant="warning">Teen</Button>{' '}
                            <Button onClick={() => getDataFromInput("Content-Rating", "Everyone")} variant="success">Everyone</Button>{' '}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Data</Accordion.Header>
              <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        {Array.from({ length: 23 }).map((_, index) => (
                          <th key={index}>{keyArray[index]}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                        {AppStoreData.map((obj)=> (
                        <tr>
                          {Array.from({ length: 23 }).map((_, index) => (
                            <td  key={index}>{obj[keyArray[index]]}</td>
                          ))}
                        </tr>
                            
                        ))}        
                    </tbody>
                  </Table>
              </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Card.Body>
      </Card>
      
    </div>
  )}
