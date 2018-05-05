import React, {Component} from 'react';
import GoogleMapReact from "google-map-react";

class RootMap extends Component{
    state={
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 1
    }
    render(){
        const {center,zoom} = this.state
        return(
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyB2KWm73tDpOV2yiIO7M7BoO-D_GIdNURM"}}
                defaultCenter={center}
                defaultZoom={zoom}
            >

            </GoogleMapReact>
        )
    }
}

export default RootMap