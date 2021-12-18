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



  const getDataFromInput = ( type, valueText) => {
    axios.post(MasterNodeURL, {
        message: "filter",
        value: valueText
      }).then(response => {
        var AppData = JSON.parse(response.data);
      console.log(AppData);
    });
  }
  

  return (
    <div>
       <Card style={{ width: "100%"}}>
        <Card.Header>
        <Card.Title className="text-success" > <h3 className="text-primary"> Mobile App Data View </h3> </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Choose From the Following Operations   </Card.Subtitle>
        </Card.Header>
        <Card.Body>        
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Query</Accordion.Header>
              <Accordion.Body>
              <Card style={{ width: "70%"}}>
                    <Card.Body>        
                      <ListGroup variant="flush">
                        <ListGroup.Item>  </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary">India</Button>{' '}
                            <Button variant="secondary">Canada</Button>{' '}
                            <Button variant="success">USA</Button>{' '}
                            <Button variant="warning">French</Button>{' '}
                            <Button variant="primary">Italy</Button> <Button variant="info">Info</Button>{' '}
                            <Button variant="success">United Kingdom</Button> <Button variant="dark">Dark</Button>{' '}

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button onClick={() => getDataFromInput("category", "Health & Fitness")} variant="primary">Health & Fitness</Button>{' '}
                            <Button onClick={() => getDataFromInput("category", "Travel & Local")} variant="secondary">Travel & Local</Button>{' '}
                            <Button onClick={() => getDataFromInput("category", "Business")} variant="success">Business</Button>{' '}
                            <Button onClick={() => getDataFromInput("category", "Entertainment")} variant="warning">Entertainment</Button>{' '}
                            <Button onClick={() => getDataFromInput("category", "Productivity")} variant="primary">Productivity</Button> {' '}
                            <Button onClick={() => getDataFromInput("category", "Lifestyle")} variant="light">Lifestyle</Button> {' '}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Data</Accordion.Header>
              <Accordion.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        {Array.from({ length: 12 }).map((_, index) => (
                          <th key={index}>Table heading</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>2</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                      <tr>
                        <td>3</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
              </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Card.Body>
      </Card>
      
    </div>
  )}
