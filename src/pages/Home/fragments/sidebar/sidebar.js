import './styles.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Gambar1 from './gambar1.png';

function Sidebar() {
  return(
    <>
    <div className='sidebar-wrapper'>
      <div className='container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Gambar1} />
      <Card.Body>
        <Card.Title> PT Rapid Teknologi Indonesia</Card.Title>
        <Card.Text>
        PT Rapid Teknologi Indonesia is an IT service solution with a highly dedicated team of an honest and positive professionals working closely together in coordination to offer and design cutting edge solutions for clients in various places across several vertical industry.
        </Card.Text>
      </Card.Body>
    </Card>
      
      </div>
    </div>
    

    
  
    </>
   
    

    
  );
}

export default Sidebar;