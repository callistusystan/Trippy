import React, {Component} from 'react';
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div style={{background:"red",width:100,height:100}}>{text}</div>;
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
            <div style={{width:"100%",height:"100%"}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyB2KWm73tDpOV2yiIO7M7BoO-D_GIdNURM"}}
                defaultCenter={center}
                defaultZoom={zoom}
                options={{
                    disableDefaultUI: true
                }}
            >
                <AnyReactComponent
                    lat={47.608013}
                    lng={-122.335167}
                    text={'CAL'}
                />
            </GoogleMapReact>
            </div>
        )
    }
}

export default RootMap