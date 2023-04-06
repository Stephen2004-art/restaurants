import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Restaurant2 = () => {
  return(
  <div>
      <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <Card style={stylesss.back}>
            <Card.Img variant="top" src='Rectangle 23.png' style={stylesss.back}/>
            <Card.Body>
              <Card.Title>Mama Mboga Eatery</Card.Title>
              <Card.Text style={stylesss.txtt}>
                <p>4 stars</p><p>300 reviews</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </div>    
  )
}

const stylesss={
  txtt:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  back:{
    borderRadius: '10px 10px 0px 0px'
  }
}

export default Restaurant2
