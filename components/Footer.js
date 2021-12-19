import styles from './Footer.module.css'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';


export default function Footer() {
  return (
    <>
    <Navbar expand="lg" variant="light" bg="light" className='.footer'>
      <Container>
        Distributed Data and Logs
      </Container>
    </Navbar>
      
    </>
  )
}
