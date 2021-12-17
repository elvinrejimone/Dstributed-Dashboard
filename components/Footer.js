import styles from './Footer.module.css'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';


export default function Footer() {
  return (
    <>
    <Navbar expand="lg" variant="light" bg="light" fixed="bottom" className='.footer'>
      <Container>
        Distributed Dashboard <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> Data and Logs
      </Container>
    </Navbar>
      
    </>
  )
}
