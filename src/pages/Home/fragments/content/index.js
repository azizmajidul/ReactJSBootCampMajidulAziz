import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Content (prop) {
  
  return(
    <section>
       <h1 className='content-wrapper'>Profil</h1>
      <div className='container'>
      <Card style={{ width: '70rem' }} className='card'>
      <Card.Body>
        <Card.Title>Majidul Aziz</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Rapid Bootcamp Batch 2 Go-Lang</Card.Subtitle>
        <Card.Text>
          Belajar Bahasa Pemrograman Front End Dengan Bahasa Pemrograman ReactJS. ReactJS Adalah Salah Satu Bahasa Pemrograman JavaScript. Dan Menggunakana NodeJS Sebagai Penjalanya.
        </Card.Text>
        <Card.Link href="#">Email : Majidul.Aziz@rapidtech.id</Card.Link>
        <Card.Link href="#">LinkedIn : Majidul Aziz</Card.Link>
      </Card.Body>
    </Card>
      </div>
    </section>
  );
}

export default Content;