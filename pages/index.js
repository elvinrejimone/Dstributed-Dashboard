import Head from 'next/head'
import DistributedData from '@components/DistributedData'
import Footer from '@components/Footer'
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import DistributedDataLogs from '@components/DistributedDataLogs';
import Container from 'react-bootstrap/Container';



export default function Home() {
  return (
    <div>
        <Head>
          <title>Distributed Dashboard!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Distributed System Dashboard</Navbar.Brand>
          </Container>
        </Navbar>

        <Row className='main'>
          <Col sm={12} md={9} lg={9} xs={12}> <DistributedData/> </Col> 
          <Col sm={12} md={3} lg={3}  xs={12}> <DistributedDataLogs/> </Col>
          
        </Row>
    </div>
  )
}
