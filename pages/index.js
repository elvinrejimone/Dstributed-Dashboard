import Head from 'next/head'
import DistributedData from '@components/DistributedData'
import Footer from '@components/Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DistributedDataLogs from '@components/DistributedDataLogs';
import Container from 'react-bootstrap/Container';



export default function Home() {
  return (
    <div>
    <Container>
        <Head>
          <title>Distributed Dashboard!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Row className='main'>
          <Col sm={8} md={8} lg={8} xs={8}> <DistributedData/> </Col> 
          <Col sm={8} md={8} lg={4}  xs={8}> <DistributedDataLogs/> </Col>
          
        </Row>
     
      <Footer />
      </Container>
    </div>
  )
}
