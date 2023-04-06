import { dividerClasses } from "@mui/material";
import React, {useState, useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import {useParams} from 'react-router-dom'
import restaurantApi from '../api/RestaurantApi'
import Maps from "../components/Maps"

const RestaurantDetails = () => {
  const {id} = useParams();
  
  const [restaurant, setRestaurant]= useState({
    name: '',
    hours: ''
  });
    
  const getOneRestaurant = () =>{
    restaurantApi.get(`/${id}`)
      .then(({data})=> setRestaurant(data));
  }
  const getDate = (num)=> {
    if(num===0){
      return 'Monday';
    }
    else if(num===1){
      return 'Tuesday';
    }
    else if(num===2){
      return 'Wednesday';
    }
    else if(num===3){
      return 'Thursday';
    }
    else if(num===4){
      return 'Friday';
    }
    else if(num===5){
      return 'Saturday';
    }
    else if(num===6){
      return 'Sunday';
    }
  }
  
  const time = (start) =>{
      let taim = start
      let timee = taim.replace(/\d\d$/,":$&")
      const [hours,minutes]= timee.split(":")
      const period= hours >= 12 ? "PM" : "AM"
      const adjustedHours = hours % 12 || 12
      const taim2 = `${adjustedHours}:${minutes} ${period}`
      return(`${taim2}`)  
  }
  
  useEffect(()=>{
    getOneRestaurant()
  },[])
  if(!restaurant.photos){
    return(
      <p>Loading...</p>
    )
  }
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={1000} style={stylees.page}>
            <img
              className="d-block w-100"
              src= {restaurant.photos[0]} 
              // onChange={(e) => setImage({...image, photos:e.target.value})}
              alt="First slide"
              style={stylees.pic}
            />
            <Carousel.Caption>
              <div style={stylees.carr}>
                <h4>{restaurant.name}</h4>
                <p>{
                  restaurant.categories.map((category)=>{
                    return(
                      category.title+' '
                    )
                  })}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} style={stylees.page}>
            <img
              className="d-block w-100"
              src= {restaurant.photos[1]} 
              alt="Second slide"
              style={stylees.pic}
            />
            <Carousel.Caption>
              <div style={stylees.carr}>
                <h4>{restaurant.name}</h4>
                <p>{
                  restaurant.categories.map((category)=>{
                    return(
                      category.title+' '
                    )
                  })}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} style={stylees.page}>
            <img
              className="d-block w-100"
              src= {restaurant.photos[2]} 
              alt="Third slide"
              style={stylees.pic}
            />
            <Carousel.Caption>
              <div style={stylees.carr}>
                <h4>{restaurant.name}</h4>
                <p>{
                  restaurant.categories.map((category)=>{
                    return(
                      category.title+' '
                    )
                  })}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={stylees.section}>
          {
               restaurant.hours[0].open.map((day)=> {
                 return (
                   <div style={stylees.dates}>
                    <p>{getDate(day.day)}</p>
                    <p>{time(day.start)} - {time(day.end)}</p>
                  </div>
                 )     
               })
              }
          </div>
          <div>
            <div>
              <Maps coordinates={restaurant.coordinates}/>
            </div>
          </div>
    </div>
        
  );
};

const stylees={
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px'
  },
  dates: {
    // // justifyContent: 'center',
    borderRadius: '10px',
    border : '1px solid black',
    padding: '10px',
    background: 'rgb(216, 216, 216)',
    textAlign: 'center',
    margin:'5px'
  },
  dates2: {
 
    margin: '0px 15px 0px 15px'
  },
  carr: {
    background: 'rgba(0, 0, 0, 0.5)',
    // opacity: '0.5',
    height: '100px',
    borderRadius: '10px'
  },
  page: {
    background: 'rgb(0, 0, 0)',
    height: '500px'
  },
  pic: {
    height: '500px'
  },
  coll: {
    marginRight: '15px'
  }
} 

export default RestaurantDetails




{/* <Col style={stylees.coll}>
          <Container style={stylees.dates}>
            {
               restaurant.hours[0].open.map((day)=> {
                 return (
                   <div style={stylees.dates2}>
                    <p>{day.day}</p>
                    <p>{day.start} - {day.end}</p>
                  </div>
                 )     
               })
              }
          </Container>
        </Col>
        <Col style={stylees.coll}>
          <Container style={stylees.dates}>
             {
               restaurant.hours[0].open.map((day)=> {
                 return (
                   <div style={stylees.dates2}>
                    <p>{day.day}</p>
                    <p>{day.start} - {day.end}</p>
                  </div>
                 )     
               })
              }
            </Container>
        </Col>
        <Col style={stylees.coll}>
          <Container style={stylees.dates}>
            {
               restaurant.hours[0].open.map((day)=> {
                 return (
                   <div style={stylees.dates2}>
                    <p>{day.day}</p>
                    <p>{day.start} - {day.end}</p>
                  </div>
                 )     
               })
              }
          </Container>
        </Col>
        <Col style={stylees.coll}>
          <Container style={stylees.dates}> 
            {
               restaurant.hours[0].open.map((day)=> {
                 return (
                   <div style={stylees.dates2}>
                    <p>{day.day}</p>
                    <p>{day.start} - {day.end}</p>
                  </div>
                 )     
               })
              }
          </Container>
        </Col>
        <Col style={stylees.coll}>
          <Container style={stylees.dates}>
            {
               restaurant.hours[0].open.map((day)=> {
                 return (
                   <div style={stylees.dates2}>
                    <p>{day.day}</p>
                    <p>{day.start} - {day.end}</p>
                  </div>
                 )     
               })
              }
          </Container>
        </Col>
        <Col style={stylees.coll}>
          <Container style={stylees.dates}>
            {
               restaurant.hours[0].open.map((day)=> {
                 return (
                   <div style={stylees.dates2}>
                    <p>{day.day}</p>
                    <p>{day.start} - {day.end}</p>
                  </div>
                 )     
               })
              }
          </Container>
        </Col> */}