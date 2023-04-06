import React from 'react'
import {GoogleMap, useLoadScript} from '@react-google-maps/api'

const Maps = ({coordinates}) => {
    console.log(coordinates)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDmTmZPHdsCgJ4janeMsYMKyTaJfHogD1E"
    })
    console.log (isLoaded)
    if (isLoaded===false) {
    return (<p>Is Loading..</p>);
    }
    
    return(
        <div>
            <GoogleMap
                zoom={10}
                centre={{
                    lat: coordinates.latitude,
                    lng: coordinates.longitude
                }}
                mapContainerStyle={styyles.mapCont}
            >
            </GoogleMap>
        </div>
    )
}

const styyles ={
    mapCont: {
        height: '400px'
    }
}

export default Maps