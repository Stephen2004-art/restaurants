import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'


const Restaurant = ({restaurants}) => {
  const navigate= useNavigate()
  return(
  <div>
      <Row xs={1} md={3} className="g-4">
        {restaurants.map((restaurant) =>(
        <Col>
          <Card style={stylesss.back} onClick={()=> navigate(`/restaurantdetails/${restaurant.id}`)}>
            <Card.Img variant="top" src={restaurant.image_url} style={stylesss.imej}/>
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text style={stylesss.txtt}>
                <p>{restaurant.rating} Stars</p><p>{restaurant.review_count} Reviews</p>
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
    borderRadius: '10px 10px 0px 0px',
  },
  imej:{
    height: '300px',
    borderRadius: '10px 10px 0px 0px'
  }
}

export default Restaurant
