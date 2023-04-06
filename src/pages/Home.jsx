import React, {useState, useEffect} from 'react'
import Restaurant from '../components/Restaurant'
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import restaurantApi from '../api/RestaurantApi'


const Home = () =>{
  const [restaurants, setRestaurants] = useState([]);
  const getData =() =>{
    restaurantApi.get('/')
      .then(({data})=> setRestaurants(data.businesses));
  }
  const filterByPrice = (price) => {
    const filteredRestaurants=restaurants.filter((restaurant)=>{
      return restaurant.price===price
    });
    return filteredRestaurants
  }
  useEffect (()=> {
    getData();
  },[]);
  return(
    <Container style={styless.cont}>
      <p className="white" style={styless.hedd}>Kwetu Lounge</p>
      <div style={styless.row}>
        <img src='Rectangle 23.png' style={styless.imgg}/>
      </div>
      
      <div style={styless.inp}>
        <input placeholder="Search for a restaurant" style={styless.boder}/>
        <SearchIcon style={styless.icon}/>
      </div>
      <div style={styless.cadd}>
        <h2>Pocket Friendly</h2>
        <Restaurant restaurants={filterByPrice('$')}/>
      </div>
      <div style={styless.cadd}>
        <h2>Moderate</h2>
        <Restaurant restaurants={filterByPrice('$$')}/>
      </div>
      <div style={styless.cadd}>
        <h2>Pricey</h2>
        <Restaurant restaurants={filterByPrice('$$$')}/>
      </div>
    </Container>
  )
}

const styless ={
  row:{
    display: 'flex',
    justifyContent: 'space-around'
  },
  inp:{
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    margin: '-23px auto 0'
  },
  boder:{
    width: '100%',
    height: '35px',
    borderRadius: '10px',
    border : '1px solid gray',
  display: 'inline-block',
    padding: '10px 15px'
  },
  icon: {
      marginLeft: '-50px',
  },
  imgg:{
    width: '1100px',
  },
  cont:{
    // borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5px',
    // borderColor: 'black',
    // maxWidth: '800px',
    // maxHeight: 'max-content'
    margin: 'auto',
    padding: '20px 20px 20px 20px',
    // background: 'rgb(255, 255, 255)'
  },
  cadd:{
    marginTop: '60px'
  },
  hedd: {
    fontWeight: '100%'
  }
}

export default Home