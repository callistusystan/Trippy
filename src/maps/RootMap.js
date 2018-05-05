import React, {Component} from 'react';
import GoogleMapReact from "google-map-react";
import {connect} from "react-redux"
import spaghettiIcon from "../icons/spaguetti.svg";
import landmarkIcon from '../icons/landmark.svg';
import sleepIcon from '../icons/sleep.svg';
const AnyReactComponent = ({text}) => <div style={{background: "red", width: 100, height: 100}}>{text}</div>;

class RootMap extends Component {
    state = {
        center: {lng: -122.4192, lat: 37.7749},
        zoom: 1
    }

    zoominInterval = null

    componentDidMount() {
        this.zoominInterval = setInterval(() => this.setState({
            center: {lng: -122.4192, lat: 37.7749},
            zoom: this.state.zoom < 12 ? this.state.zoom + 0.25 : clearInterval(this.zoominInterval)
        }), 150)
    }

    componentWillUpdate(props){
        // console.log(props.topFood)
        // if(props.topFood){
        //     console.log(props.topFood)
        //     const {lat_lng:{lat,lng}} = props.topFood[0]
        //     if(this.state.center.lat !== lat && this.state.center.lng !== lng){
        //         this.setState({center:{lat,lng},zoom:14})
        //     }
        //
        // }
    }

    renderMarkers = (group, icon) => {
        const { itinerary } = this.props;
        const gp = itinerary[group]
        if(!gp){
            return
        }
        return gp.map(g=>{
            if(!g['lat_lng']){
                return
            }
            const {lat,lng} = g['lat_lng']
            return <img lat={lat} lng={lng} src={icon} width={20} height={20}/>
        })
    }

    render() {
        const {center, zoom} = this.state
        return (
            <div style={{width: "100%", height: "100%"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyB2KWm73tDpOV2yiIO7M7BoO-D_GIdNURM"}}
                    // defaultCenter={center}
                    center={center}
                    defaultZoom={1}
                    zoom={zoom}
                    options={{
                        disableDefaultUI: true
                    }}
                >
                    {this.renderMarkers('eats', spaghettiIcon)}
                    {this.renderMarkers('hotel', sleepIcon)}
                    {this.renderMarkers('attraction', landmarkIcon)}
                </GoogleMapReact>
            </div>
        )
    }
}

const mapStateToProps = ({ itinerary }) => ({ itinerary });

export default connect(mapStateToProps)(RootMap);