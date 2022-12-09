import './styles.css';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const data = [
  { featureName: "News", link: "https://www.detik.com/", forAge: "3+" },
  { featureName: "Sport", link: "https://www.halodoc.com/kesehatan/olahraga", forAge: "7+" },
  { featureName: "FoodBlogger", link: "https://myculinartsdaily.wordpress.com/tag/foodblooger/", forAge: "All"},
]


function Content (prop) {
  
  return(
    <section>
       <h1 className='content-wrapper'>Ini Feature</h1>
       <div className='container'>
      <Card style={{ width: '70rem' }} className='card'>
      <Card.Body>
      <Card.Title>Feature This Website</Card.Title>
      <Table striped>
      <thead>
        <tr>
          
          <th>Feature Name</th>
          <th>Link </th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
      {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.featureName}</td>
              <td>{val.link}</td>
              <td>{val.forAge}</td>
            </tr>
          )
        })}
        
       
      </tbody>
    </Table>
      </Card.Body>
    </Card>
      </div>
     
      
    </section>
  );
}

export default Content;