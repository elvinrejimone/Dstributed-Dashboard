import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




export default function DistributedDataLogs() {
    return ( 
      <Card style={{ width: "70%"}}>
        <Card.Header>
        <Card.Title className="text-success" > Distributed System Logs </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Log of the Entire Distributed System   </Card.Subtitle>
        </Card.Header>
        <Card.Body>        
          <ListGroup variant="flush">
            <ListGroup.Item>Request Sent to Node#1</ListGroup.Item>
            <ListGroup.Item>Node#1 Sent Request to Data Node</ListGroup.Item>
            <ListGroup.Item>Data Recieved from Data Node</ListGroup.Item>
            <ListGroup.Item>Data Processed at Node#1</ListGroup.Item>
            <ListGroup.Item>Data Recieved at Master Node</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    )}
  