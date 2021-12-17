import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';






export default function DistributedData() {
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
                            <Button variant="primary">Health</Button>{' '}
                            <Button variant="secondary">Gaming</Button>{' '}
                            <Button variant="success">Productivity</Button>{' '}
                            <Button variant="warning">IOT</Button>{' '}
                            <Button variant="primary">Work</Button> <Button variant="info">Info</Button>{' '}
                            <Button variant="light">Personal</Button> <Button variant="dark">Dark</Button>{' '}
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
