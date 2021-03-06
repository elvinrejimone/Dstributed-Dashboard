import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import axios from "axios";
import { ArrowClockwise, EraserFill } from 'react-bootstrap-icons';


const logURL = "https://us-central1-abiding-topic-335320.cloudfunctions.net/DistSysLogs";

export default function DistributedDataLogs() {
  const [DistSysLogs, setDistSysLogs] = useState([]);


  useEffect(() => {
    // Update the document title using the browser API
    axios.get(logURL).then(response => {
      console.log(response.data);
      createLogsArray(response.data);
      });
    }, []);


  const fetchLogs = () => {
    axios.get(logURL).then(response => {
      console.log(response.data);
      createLogsArray(response.data);
    });
  }

  const createLogsArray = (logs_array) => {
    
    let logsArray = []

    for (let i = 0; i < logs_array.length; i++) {
      var indVal = logs_array[i];
      let arr = indVal.split(':');
      let logObj = {
        node: arr[0],
        log: arr[1]
      }
      logsArray.push(logObj);
    }

    setDistSysLogs(logsArray);

  }

  const clearLogs = () => {
    axios.post(logURL,{
      message : "clearLogs"
    }).then(response => {
      console.log(response.data);
      createLogsArray(response.data);
    });
  }
  
  return ( 
      <Card style={{ width: "100%"}}>
        <Card.Header>
          <Row>
            <Col md={7} lg={7} sm={7}>   
                <Card.Title className="text-success" > Distributed System Logs </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Log of the Entire Distributed System   </Card.Subtitle>
            </Col>
            <Col md={2} lg={2} sm={2}><Button onClick={clearLogs} variant="primary"> <EraserFill /> </Button></Col>
            <Col md={2} lg={2} sm={2}><Button onClick={fetchLogs} variant="primary"> <ArrowClockwise /> </Button></Col>
          </Row>
     
        </Card.Header>
        <Card.Body>        
          <ListGroup variant="flush">
            {DistSysLogs.map((log)=>  <ListGroup.Item><Badge bg="dark">{log.node}</Badge>{log.log}</ListGroup.Item> )}
          </ListGroup>
        </Card.Body>
      </Card>
    )}
  